import type { GameObject } from './detectCollision';
import { PaddlesParts } from 'pages/game/utils/types';

export function detectCollisionPaddle(
  ball: GameObject,
  paddle: GameObject
): PaddlesParts {
  const bottomOfBall = ball.position.y + ball.width;
  const leftOfBall = ball.position.x;
  let hitPosition = 0;

  const topOfObject = paddle.position.y;
  const leftSideOfObject = paddle.position.x;
  const rightSideOfObject = paddle.position.x + paddle.width;

  if (
    bottomOfBall >= topOfObject &&
    ball.position.x + ball.width >= leftSideOfObject &&
    ball.position.x <= rightSideOfObject
  ) {
    hitPosition = leftOfBall - leftSideOfObject;
    if (hitPosition <= 20) {
      return 0;
    } else if (hitPosition > 20 && hitPosition <= 50) {
      return 1;
    } else if (hitPosition > 50 && hitPosition <= 75) {
      return 2;
    } else if (hitPosition > 75 && hitPosition <= 100) {
      return 3;
    } else if (hitPosition > 100 && hitPosition <= 130) {
      return 4;
    } else if (hitPosition >= 130) {
      return 5;
    }
  }

  return 0;
}
