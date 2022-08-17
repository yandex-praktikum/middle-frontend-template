import { Position } from 'pages/game/game.types';
import EventEmitter from 'eventemitter3';

interface IGameObject {
  gameWidth: number;
  gameHeight: number;
  width: number;
  height: number;
  position: Position;
  name: string;
}

export abstract class GameObject extends EventEmitter {
  public gameWidth: number;
  public gameHeight: number;
  public height: number;
  public width: number;
  public position: Position;
  public name: string;
  public isMarkedForDeletion = false;
  protected constructor({
    gameWidth,
    gameHeight,
    width,
    height,
    position,
    name,
  }: IGameObject) {
    super();
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.height = height;
    this.width = width;
    this.position = position;
    this.name = name;
  }

  abstract draw(ctx: CanvasRenderingContext2D): void;
  abstract update(): void;
}
