// @ts-check
import { cons, car, cdr } from '../utils/pairs.js';

// BEGIN (write your solution here)
export const make = (numer, denom) => cons(numer, denom);

export const numer = (rat) => car(rat);

export const denom = (rat) => cdr(rat);

export const toString = (rat) => `${numer(rat)} / ${denom(rat)}`;

export const isEqual = (rat1, rat2) => (
  numer(rat1) * denom(rat2) === numer(rat2) * denom(rat1)
);

export const add = (rat1, rat2) => {
  const a = numer(rat1);
  const b = denom(rat1);
  const c = numer(rat2);
  const d = denom(rat2);

  return make(a * d + b * c, b * d);
};

export const sub = (rat1, rat2) => {
  const a = numer(rat1);
  const b = denom(rat1);
  const c = numer(rat2);
  const d = denom(rat2);

  return make(a * d - b * c, b * d);
};

export const mul = (rat1, rat2) => {
  const a = numer(rat1);
  const b = denom(rat1);
  const c = numer(rat2);
  const d = denom(rat2);

  return make(a * c, b * d);
};

export const div = (rat1, rat2) => {
  const a = numer(rat1);
  const b = denom(rat1);
  const c = numer(rat2);
  const d = denom(rat2);

  return make(a * d, b * c);
};
// END
