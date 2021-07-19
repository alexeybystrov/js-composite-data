// @ts-check
import {
  makePoint, getX, getY, toString as pointToString,
} from '../utils/points.js';
import { cons, car, cdr } from '../utils/pairs.js';

// BEGIN (write your solution here)
export const makeSegment = (point1, point2) => cons(point1, point2);

export const startSegment = (segment) => car(segment);

export const endSegment = (segment) => cdr(segment);

export const segmentToString = (segment) => `[${pointToString(startSegment(segment))}, ${pointToString(endSegment(segment))}]`;

export const midpointSegment = (segment) => {
  const start = startSegment(segment);
  const end = endSegment(segment);
  const midX = (getX(start) + getX(end)) / 2;
  const midY = (getY(start) + getY(end)) / 2;

  return makePoint(midX, midY);
};
// END
