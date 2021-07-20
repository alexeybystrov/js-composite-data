// @ts-check
export const cons = (x, y) => (f) => f(x, y);

// BEGIN (write your solution here)
export const car = (pair) => pair((x) => x); // second arg unused here

export const cdr = (pair) => pair((x, y) => y);
// END
