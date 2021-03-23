// Importa a class events do Node.js
import Events from "events";
import CliConfig from "./src/cliConfig.js";
import SocketClient from "./src/socket.js";
import TerminalController from "./src/terminalController.js";

const [nodePath, filePath, ...commands] = process.argv;

const config = CliConfig.parseArguments(commands);

// Cria o evento componentEmitter, que será responsável em pegar a camada controladora e outras camadas, emitindo os eventos necessários.
const componentEmitter = new Events();
const socketClient = new SocketClient(config);
await socketClient.initialize();

// //Cria o Terminal Controller
// const controller = new TerminalController();

// // Inicia o projeto projeto
// await controller.initializeTable(componentEmitter);
