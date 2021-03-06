"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const randomatic_1 = __importDefault(require("randomatic"));
const logger_1 = require("../logger");
const common_1 = require("./common");
function handleLobbyCreate(io, socket, username, lobbies) {
    return __awaiter(this, void 0, void 0, function* () {
        const lobbyCode = randomatic_1.default("A", common_1.LC_LENGTH);
        socket.join(lobbyCode);
        let og_host;
        let request_game;
        let game_id;
        try {
            const last_player = yield common_1.localAxios.get(`/api/player/last-user-id/${socket.id}`);
            if (last_player.data.player && last_player.data.player.id) {
                // create the Game
                og_host = last_player.data.player.id;
                request_game = yield common_1.localAxios.post(`/api/game/new`, { og_host });
                if (request_game === null || request_game === void 0 ? void 0 : request_game.data.ok) {
                    game_id = request_game === null || request_game === void 0 ? void 0 : request_game.data.game_id;
                }
            }
        }
        catch (err) {
            logger_1.log(err.message);
        }
        logger_1.log("LOBBY CREATED BY: " + og_host);
        logger_1.log("GAME : " + game_id);
        lobbies[lobbyCode] = {
            game_id,
            lobbyCode,
            players: [
                { id: socket.id, username, definition: "", points: 0, connected: true }
            ],
            host: socket.id,
            phase: "PREGAME",
            word: "",
            definition: "",
            guesses: [],
            roundId: null
        };
        try {
            yield common_1.updatePlayerToken(io, socket, og_host, username, "", 0, lobbyCode);
        }
        catch (err) {
            logger_1.log(err.message);
        }
        common_1.privateMessage(io, socket, "welcome", socket.id);
        io.to(lobbyCode).emit("game update", lobbies[lobbyCode]);
    });
}
exports.default = handleLobbyCreate;
//# sourceMappingURL=handleLobbyCreate.js.map