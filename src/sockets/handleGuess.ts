import { localAxios, VALUE_OF_TRUTH, VALUE_OF_BLUFF } from "./common";
import handleErrorMessage from "./handleErrorMessage";

export async function handleArrayOfGuesses(
  io: any,
  socket: any,
  lobbyCode: any,
  lobbies: any,
  guesses: any[]
) {
  const lobby = lobbies[lobbyCode];
  const roundId = lobby.roundId;
  console.log('vote & calculate scores');
  guesses.forEach(async (g) => {
    try {
      localAxios.post("/api/votes", {
        userID: g.player,
        definitionID: g.guess,
        roundID: roundId
      })
      .then(() => {
        lobby.players.forEach((player: any) => {
          if (g.guess === 0 && player.id === g.player) {
            player.points+=VALUE_OF_TRUTH; // +1 if you voted for the provided definition.
          } else if (g.guess === player.definitionId && g.player !== player.id) {
            player.points+=VALUE_OF_BLUFF; // +1 if someone else voted for your definition.
          }
        });
      })
    } catch (err) {
      console.log("error: handleArrayOfGuesses, ${err}");
    }
  });
  try {
    const newRound = await localAxios.post("/api/round/finish", { roundId });
    if (newRound.status === 200) {
      console.log(`* end of round ${roundId}`);
    }
  } catch (err) {
    console.log("error while ending round!");
    handleErrorMessage(io, socket, err);
    return;
  }
  console.log('changing phase');
  lobbies[lobbyCode].phase = "RESULTS";
  io.to(lobbyCode).emit("game update", lobbies[lobbyCode]);
}
