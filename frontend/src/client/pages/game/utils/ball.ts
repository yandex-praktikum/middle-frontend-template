import ballImg from '../../../assets/img/ball.png';
import { Position } from '../game.types';
import { GameObject } from './gameObject';
import { Game } from './game';
import { Paddle } from './paddle';
import { detectCollisionPaddle } from './detectCollisionWithPaddle';

import AudioManager from '../../../../client/services/media-api';

export class Ball extends GameObject {
  readonly image: HTMLImageElement;
  public paddle: Paddle;
  private game: Game;

  speed: Position = {
    x: 5,
    y: -7,
  };

  constructor(game: Game) {
    const { gameWidth, gameHeight, paddle } = game;

    super({
      gameWidth,
      gameHeight,
      height: 16,
      width: 16,
      position: {
        x: 10,
        y: 400,
      },
      name: 'ball',
    });

    this.image = this.createImage();
    this.paddle = paddle;
    this.game = game;

    this.on('collate:paddle', this.onCollateWithPaddle);
    this.on('collate:brick', this.onCollateWithBrick);
    this.on('reset', this.reset);

    this.reset();
  }

  reset() {
    this.speed = {
      x: 4,
      y: -4,
    };

    this.position = {
      x: 10,
      y: 400,
    };
  }

  onCollateWithPaddle(paddle: GameObject) {
    console.log(`${this.name} collated with ${paddle.name}`);
    const hitbox = detectCollisionPaddle(this, paddle);

    AudioManager.beat();
    /*
    detectCollisionPaddle - делить каретку на 6 почти равные части
        И возвращает порядковый номер части на который произошел столкновения с мячом
        А case и внизу изменяет скорость и траекторию мяча исходя на каком части произошел столкновения.
        Это позволяет обеспечить порулить полетом мяча тем самым направить мяча в конкретный участок кирпичной стены.

        0 - Левый край который резко увеличивает скорость мяча направляя в левую сторону
        1, 2 - всегда направляет в левую сторону, но разной скоростью исходя с какой стороны летит мяч
        3, 4 - всегда направляет в правую сторону, но разной скоростью исходя с какой стороны летит мяч
        5 - Правый край который резко увеличивает скорость мяча направляя в левую сторону
     */

    switch (hitbox) {
      case 0:
        this.speed.x = -9;
        this.speed.y = -this.speed.y;
        this.position.y = paddle.position.y - this.height;
        break;

      case 1:
        if (this.speed.x < 0) {
          this.speed.x = -6;
        } else {
          this.speed.x += -6;
        }
        this.speed.y = -this.speed.y;
        this.position.y = paddle.position.y - this.height;
        break;

      case 2:
        if (this.speed.x < 0) {
          this.speed.x = -4;
        } else {
          this.speed.x += -4;
        }
        this.speed.y = -this.speed.y;
        this.position.y = paddle.position.y - this.height;
        break;

      case 3:
        if (this.speed.x > 0) {
          this.speed.x = 4;
        } else {
          this.speed.x += 4;
        }
        this.speed.y = -this.speed.y;
        this.position.y = paddle.position.y - this.height;
        break;

      case 4:
        if (this.speed.x > 0) {
          this.speed.x = 6;
        } else {
          this.speed.x += 6;
        }
        this.speed.y = -this.speed.y;
        this.position.y = paddle.position.y - this.height;
        break;

      case 5:
        this.speed.x = 9;
        this.speed.y = -this.speed.y;
        this.position.y = paddle.position.y - this.height;
        break;

      default:
        return null;
    }
  }

  onCollateWithBrick(gameObject: GameObject) {
    console.log(`${this.name} collated with ${gameObject.name}`);
    AudioManager.collect();
    this.game.emit('on_ball_collate');
    this.speed.y = -this.speed.y;
  }

  createImage() {
    const ballImage = new Image();

    ballImage.width = 10;
    ballImage.height = 10;
    ballImage.src = ballImg;

    return ballImage;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(
      this.image as HTMLImageElement,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );

    this.emit('rendered', this);
  }

  update() {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    //collision detection on x axis
    if (this.position.x < 0 || this.position.x + this.width > this.gameWidth) {
      this.speed.x = -this.speed.x;
    }

    //collision detection on top
    if (this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    //collision detection on bottom
    if (this.position.y + this.height > this.gameHeight) {
      this.game.emit('hit_bottom');
      this.emit('reset');
    }

    this.emit('updated', this);
  }
}
