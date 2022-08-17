import EventEmitter from 'eventemitter3';
import { GameObject } from 'pages/game/utils/gameObject';
import { Game } from './game';

export class InputManager extends EventEmitter {
  private watchedObjects: GameObject[] = [];
  private game: Game;
  constructor(game: Game) {
    super();

    this.game = game;

    this.on('keydown', this.watchForInputEvents, this);
    this.on('keyup', this.watchForInputEvents, this);
  }

  watch(object: GameObject) {
    this.watchedObjects.push(object);
  }

  watchForInputEvents(event: string) {
    this.watchedObjects.forEach((object) => {
      object.emit(`${object.name}:${event}`);
    });

    this.game.emit(event);
  }
}
