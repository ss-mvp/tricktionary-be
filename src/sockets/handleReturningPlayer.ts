import { localAxios, privateMessage, gameExists } from "./common";

async function handleReturningPlayer(
  io: any,
  socket: any,
  token: string | undefined,
  lobbies: any
) {
  const user_id = socket.id;
  let login;
  let newtoken;
  let player;
  let old_user_id;
  // try logging in with the old token
  try {
    login = await localAxios.post("/api/auth/login", {
      user_id,
      last_token: token
    });
    player = login.data.player;
    newtoken = login.data.token;
    old_user_id = login.data.old_user_id
  } catch (err) {
    return { ok: false, message: err.message };
  }
  // send player their new token.
  privateMessage(io, socket, "token update", newtoken);
  // check for last_played activity
  if (!player.last_played || !gameExists(player.last_played, lobbies)) {
    console.log("...no active game was found.");
    return;
  }
  // player has a game they may want to rejoin.
  const rejoinable = { player, password: newtoken.slice(newtoken.length - 4), old_user_id }
  if (lobbies[player.last_played].waiting) {
    // if we have people waiting, join them
    lobbies[player.last_played].waiting = [...lobbies[player.last_played].waiting, rejoinable]
  } else {
    lobbies[player.last_played].waiting = [rejoinable];
  }
  // update lobby that player may be re-joining.
  io.to(player.last_played).emit("game update", lobbies[player.last_played]);
  // finally, we give player the option to rejoin.
  privateMessage(io, socket, "ask rejoin", player.last_played);
}

export default handleReturningPlayer;
