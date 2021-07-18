import { cons, toString } from '../../src/utils/pairs.js';
import reversePair from '../../src/lesson2/reversePair.js';

test('reversePair', () => {
  expect(toString(reversePair(cons(4, 3)))).toBe(toString(cons(3, 4)));
  expect(toString(reversePair(cons(-10, 1)))).toBe(toString(cons(1, -10)));
});
