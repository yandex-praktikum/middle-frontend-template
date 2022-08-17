export type GameObject = {
  position: {
    x: number;
    y: number;
  };

  height: number;
  width: number;
};
export function detectCollision(object1: GameObject, object2: GameObject) {
  const topOfTheObject2 = object2.position.y;
  const bottomOfTheObject2 = object2.position.y + object2.height;
  const bottomOfObject1 = object1.position.y + object1.height;
  const topOfTheObject1 = object1.position.y;
  const leftOfTheObject2 = object2.position.x;
  const rightOfTheObject2 = object2.position.x + object2.width;

  return (
    bottomOfObject1 >= topOfTheObject2 &&
    topOfTheObject1 <= bottomOfTheObject2 &&
    object1.position.x >= leftOfTheObject2 &&
    object1.position.x + object1.width <= rightOfTheObject2
  );
}
