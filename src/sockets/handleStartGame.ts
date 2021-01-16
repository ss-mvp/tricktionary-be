import { localAxios } from "./common";

async function handleStartGame(
  io: any,
  socket: any,
  lobbyCode: any,
  lobbies: any
) {
  const phase: string = "WRTITING";
  // get random word
  let word: any;
  let output: any;
  try {
    output = await localAxios.get("/api/words");
    word = output?.data?.word;
    // console.log(word)
  } catch (err) {
    console.log(err);
  }

  // guard
  if (!word?.id) return false;
  // start a new round
  let newRound: any;
  let roundId: any;
  try {
    console.log('starting a new round...')
    newRound = await localAxios.post("/api/round/start", {
      lobby: lobbies[lobbyCode],
      wordId: word.id
    });
    roundId = newRound.data?.roundId;
  } catch (err) {
    console.log('error!')
    // console.log(err);
  }
  console.log("ROUND ID:", roundId)
  // if (!roundId) return false;
  // set phasers to "WRITING" and update the game state
  lobbies[lobbyCode] = {
    ...lobbies[lobbyCode],
    phase,
    word: word.word,
    definition: word.definition,
    roundId
  };
  // REST-ful update
  let result: any;
  try {
    result = await localAxios.post("/api/user-rounds/add-players", {
      players: lobbies[lobbyCode].players,
      roundId
    });
  } catch (err) {
    console.log('error: handleStartGame:55')
    // console.log(err);
  }
  if (result?.status === 201) {
    // console.log("game update...");
    // pub-sub update
    io.to(lobbyCode).emit("game update", lobbies[lobbyCode]);
  } else {
    console.log("error updating game");
    // console.log(result);
  }
}

export default handleStartGame;