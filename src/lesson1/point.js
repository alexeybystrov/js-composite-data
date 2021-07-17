// @ts-check
import { makePoint, getX, getY } from '../utils/points.js';

// BEGIN (write your solution here)
export const getQuadrant = (point) => {
  const x = getX(point);
  const y = getY(point);

  switch (true) {
    case x > 0 && y > 0:
      return 1;
    case x < 0 && y > 0:
      return 2;
    case x < 0 && y < 0:
      return 3;
    case x > 0 && y < 0:
      return 4;
    default:
      return null;
  }
};

export const getSymmetricalPoint = (point) => {
  const x = getX(point);
  const y = getY(point);

  return makePoint(-x, -y);
};

export const calculateDistance = (point1, point2) => {
  const x1 = getX(point1);
  const y1 = getY(point1);
  const x2 = getX(point2);
  const y2 = getY(point2);

  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
};
// END
