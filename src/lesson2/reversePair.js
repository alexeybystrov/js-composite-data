import { cons, car, cdr, toString } from '../utils/pairs.js'; // eslint-disable-line

// BEGIN (write your solution here)
const reversePair = (pair) => cons(cdr(pair), car(pair));
// END
export default reversePair;
