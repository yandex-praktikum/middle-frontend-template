import brickImg from '../../../assets/img/brick.png';
import { Position } from '../game.types';
import { Game } from './game';
import { GameObject } from './gameObject';

export class Brick extends GameObject {
  readonly image: HTMLImageElement;
  public isMarkedForDeletion = false;

  constructor({ gameHeight, gameWidth }: Game, position: Position) {
    super({
      width: 80,
      height: 24,
      position,
      gameHeight,
      gameWidth,
      name: 'brick',
    });

    this.image = this.createImage();

    this.on('collate:ball', this.destroy);
  }

  createImage() {
    const brickImage = new Image();

    brickImage.width = 10;
    brickImage.height = 10;
    brickImage.src = brickImg;

    return brickImage;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  update() {
    // if (detectCollision(this.ball, this)) {
    // this.ball.speed.y = -this.ball.speed.y;
    // this.isMarkedForDeletion = true;
    // }
    // this.destroy()
    //TODO: REMOVE THIS METHOD. NOW IT IS CAUSING TYPE ERROR WHEN REMOVE THIS METHOD
  }

  destroy(gameObject: GameObject) {
    console.log(`brick collated with ${gameObject.name}`);

    this.isMarkedForDeletion = true;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.image as HTMLImageElement,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}
