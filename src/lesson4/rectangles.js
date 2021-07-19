// @ts-check
// eslint-disable-next-line
import { makePoint, getX, getY, quadrant, toString as pointToString } from '../utils/points.js';
// eslint-disable-next-line
import { cons, car, cdr, toString as pairToString } from '../utils/pairs.js';

// BEGIN (write your solution here)
export const makeRectangle = (startPoint, width, height) => cons(startPoint, cons(width, height));

export const getStartPoint = (rectangle) => car(rectangle);

export const getWidth = (rectangle) => car(cdr(rectangle));

export const getHeight = (rectangle) => cdr(cdr(rectangle));

export const square = (rectangle) => getWidth(rectangle) * getHeight(rectangle);

export const perimeter = (rectangle) => 2 * (getWidth(rectangle) + getHeight(rectangle));

export const containsTheOrigin = (rectangle) => {
  const point1 = getStartPoint(rectangle);
  const point1X = getX(point1);
  const point1Y = getY(point1);
  const point2 = makePoint(point1X + getWidth(rectangle), point1Y - getHeight(rectangle));

  return quadrant(point1) === 2 && quadrant(point2) === 4;
};
// END
