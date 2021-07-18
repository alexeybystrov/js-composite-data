// @ts-check
import { car, cdr, isPair, toString } from '../utils/pairs.js'; // eslint-disable-line

// BEGIN (write your solution here)
const findPrimitiveBox = (pair) => {
  // switch (true) {
  //   case isPair(car(pair)):
  //     return findPrimitiveBox(car(pair));
  //   case isPair(cdr(pair)):
  //     return findPrimitiveBox(cdr(pair));
  //   default:
  //     return pair;
  // }

  if (isPair(car(pair))) {
    return findPrimitiveBox(car(pair));
  }

  if (isPair(cdr(pair))) {
    return findPrimitiveBox(cdr(pair));
  }

  return pair;
};
// END

export default findPrimitiveBox;
