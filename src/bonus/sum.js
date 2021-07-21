const sum = (a) => {
  let currentSum = a;

  const f = (b) => {
    currentSum += b;
    return f;
  };

  f.valueOf = () => currentSum;

  return f;
};

export default sum;
