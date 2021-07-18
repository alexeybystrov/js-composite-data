import { cons, toString } from '../../src/utils/pairs.js';
import findPrimitiveBox from '../../src/lesson2/findPrimitiveBox.js';

test('findPrimitiveBox', () => {
  const pair1 = cons(
    cons(1, cons(cons(true, 5), null)),
    8,
  );
  expect(toString(findPrimitiveBox(pair1))).toBe(toString(cons(true, 5)));

  const pair2 = cons(
    null,
    cons(cons('hello', cons(0, cons(null, 'ehu'))), null),
  );
  expect(toString(findPrimitiveBox(pair2))).toBe(toString(cons(null, 'ehu')));

  const pair3 = cons(
    false,
    cons('one', true),
  );
  expect(toString(findPrimitiveBox(pair3))).toBe(toString(cons('one', true)));
});
