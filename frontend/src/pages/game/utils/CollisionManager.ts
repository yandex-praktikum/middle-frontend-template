import EventEmitter from 'eventemitter3';
import { GameObject } from './gameObject';
import type { Game } from './game';
import { detectCollision } from './detectCollision';

export class CollisionManager extends EventEmitter {
  private watchedObjects: [GameObject, GameObject][] = [];

  constructor(game: Game) {
    super();

    game.on('updated', this.calculate, this);
  }

  watch(object1: GameObject, object2: GameObject) {
    this.watchedObjects.push([object1, object2]);
  }

  calculate() {
    this.watchedObjects = this.watchedObjects.filter(([object1, object2]) => {
      if (object1.isMarkedForDeletion || object2.isMarkedForDeletion) {
        return false;
      }

      if (detectCollision(object1, object2)) {
        object1.emit(`collate:${object2.name}`, object2);
        object2.emit(`collate:${object1.name}`, object1);
      }

      return true;
    });
  }
}
