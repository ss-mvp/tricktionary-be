import {
  MAX_PLAYERS,
  LC_LENGTH,
  localAxios,
  whereAmI,
  updatePlayerToken,
  privateMessage,
} from "./common";
import { log } from "../logger";
import handleErrorMessage from "./handleErrorMessage";

import { schedulePulseCheck } from "./crontab";
const JOINABLE = [
  "PREGAME",
  "RESULTS",
  "FINALE"
];
/**
 * Connects the player with the active game being played.
 *
 * @param io (socket io)
 * @param socket (socket io)
 * @param username Player's name
 * @param lobbyCode Player's join code
 * @param lobbies game-state
 */
async function handleLobbyJoin(
  io: any,
  socket: any,
  username: string,
  lobbyCode: any,
  lobbies: any,
  doCheckPulse: boolean | undefined
) {
  if (whereAmI(socket) === lobbyCode.trim()) {
    io.to(lobbyCode).emit("game update", lobbies[lobbyCode]); // ask room to update
    return;
  }
  if (lobbyCode.length !== LC_LENGTH) {
    handleErrorMessage(
      io,
      socket,
      2000,
      "The lobby code you entered is not long enough"
    );
    return;
  }
  if (Object.keys(lobbies).filter((lc) => lc === lobbyCode).length === 0) {
    handleErrorMessage(
      io,
      socket,
      2000,
      "The lobby code you entered does not correspond to an active room"
    );
    return;
  }
  if (lobbies[lobbyCode].players.length > MAX_PLAYERS) {
    handleErrorMessage(
      io,
      socket,
      2001,
      `The lobby with code ${lobbyCode} has reached the maximum player limit of ${MAX_PLAYERS}`
    );
    return;
  }
  try {
    const last_player = await localAxios.get(
      `/api/player/last-user-id/${socket.id}`
    );
    const p_id = last_player.data.player.id;
    await updatePlayerToken(io, socket, p_id, username, "", 0, lobbyCode);
  } catch (err) {
    log(err.message);
  }

  if (lobbies[lobbyCode] && lobbies[lobbyCode].players) {
    let rejoined =
      lobbies[lobbyCode].players.filter(
        (p: any) => p?.rejoinedAs && p.rejoinedAs === socket.id
      ).length > 0;
    if (lobbies[lobbyCode].phase in JOINABLE && !rejoined) {
      // prevent *new players from joining mid-game.
      handleErrorMessage(
        io,
        socket,
        2002,
        `Unfortunately, the lobby with code ${lobbyCode} has already begun their game`
      );
      return;
    }
    log(`${username} ${rejoined ? "re-joined" : "joined"} ${lobbyCode}`);
    if (
      !(
        lobbies[lobbyCode].players.filter((p: any) => p.id === socket.id)
          .length > 0
      )
    ) {
      if (!rejoined) {
        // this player is new
        lobbies[lobbyCode] = {
          ...lobbies[lobbyCode],
          players: [
            ...lobbies[lobbyCode].players,
            {
              id: socket.id,
              username,
              definition: "",
              points: 0,
              connected: true,
            },
          ],
        };
      } else {
        // this player has returned
        lobbies[lobbyCode] = {
          ...lobbies[lobbyCode],
          players: [
            ...lobbies[lobbyCode].players.map((p: any) => {
              if (p?.rejoinedAs && p.rejoinedAs === socket.id) {
                return { ...p, id: socket.id, connected: true };
              }
              return p;
            }),
          ],
        };
      }
      socket.join(lobbyCode);
    }
  }
  privateMessage(io, socket, "welcome", socket.id);
  io.to(lobbyCode).emit("game update", lobbies[lobbyCode]); // ask room to update
  if (doCheckPulse) {
    log("PULSE CHECK");
    try {
      schedulePulseCheck(io, lobbies, lobbyCode, 5);
    } catch (err) {
      log("ERROR scheduling pulse check");
    }
  }
}
export default handleLobbyJoin;
