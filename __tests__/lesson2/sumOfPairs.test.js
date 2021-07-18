import { cons, toString } from '../../src/utils/pairs.js';
import sumOfPairs from '../../src/lesson2/sumOfPairs.js';

test('sumOfPairs', () => {
  expect(toString(sumOfPairs(cons(1, 8), cons(8, 3)))).toBe(toString(cons(9, 11)));
  expect(toString(sumOfPairs(cons(10, -1), cons(93, 100)))).toBe(toString(cons(103, 99)));
});
