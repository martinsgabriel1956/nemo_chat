// Importa a class events do Node.js
import Events from 'events';
import TerminalController from './src/terminalController.js';

// Cria o evento componentEmitter, que será responsável em pegar a camada controladora e outras camadas, emitindo os eventos necessários.
const componentEmitter = new Events();

//Cria o Terminal Controller 
const controller = new TerminalController();

// Inicia o projeto projeto
await controller.initializeTable(componentEmitter);

