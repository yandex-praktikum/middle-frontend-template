import { Paddle } from './paddle';
import EventEmitter from 'eventemitter3';
import { InputManager } from './InputManager';
import { Game } from './game';

export class InputHandler extends EventEmitter {
  inputManager: InputManager;
  constructor(paddle: Paddle, game: Game) {
    super();

    this.inputManager = new InputManager(game);
    this.inputManager.watch(paddle);

    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowLeft': {
          this.inputManager.emit('keydown', 'keydown:ArrowLeft');
          break;
        }

        case 'ArrowRight': {
          this.inputManager.emit('keydown', 'keydown:ArrowRight');
          break;
        }

        case 'Escape': {
          this.inputManager.emit('keydown', 'Escape');
          break;
        }

        case 'Space': {
          this.inputManager.emit('keydown', 'Space');
          break;
        }

        case 'Enter': {
          this.inputManager.emit('keydown', 'Enter');
          break;
        }

        default:
          return true;
      }
    });

    document.addEventListener('keyup', (event) => {
      switch (event.code) {
        case 'ArrowLeft': {
          this.inputManager.emit('keyup', 'keyup:ArrowLeft');
          break;
        }

        case 'ArrowRight': {
          this.inputManager.emit('keyup', 'keyup:ArrowRight');
          break;
        }

        default:
          return true;
      }
    });
  }
}
