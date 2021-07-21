import sum from '../../src/bonus/sum.js';

describe('Sum', () => {
  it('test sum1', () => {
    const sum1 = +sum(1)(3);

    const result = 4;
    expect(sum1).toBe(result);
  });

  it('test sum2', () => {
    const sum2 = +sum(1)(3)(4);

    const result = 8;
    expect(sum2).toBe(result);
  });

  it('test sum3', () => {
    const sum3 = +sum(1)(3)(4)(2)(3);

    const result = 13;
    expect(sum3).toBe(result);
  });
});
