import { Brick } from './brick';
import { Game } from './game';

export type Level = number[][];

export const level1: Level = [
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
  // [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

export const level2: Level = [
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  // [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
export const level3: Level = [
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
export const level4: Level = [
  [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 1, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

export function buildLevels(game: Game, level: number[][]) {
  const bricks: Brick[] = [];

  level.forEach((row: number[], rowIndex: number) => {
    row.forEach((brick, brickIndex) => {
      if (brick) {
        const position = {
          x: brickIndex * 80,
          y: 60 + rowIndex * 24,
        };

        bricks.push(new Brick(game, position));
      }
    });
  });

  return bricks;
}
