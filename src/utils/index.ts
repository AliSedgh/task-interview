const findFibonacciNeighbors = (n: number) => {
  let a = 0,
    b = 1;
  if (n === 0) {
    return [0, 0, 1];
  }
  while (b < n) {
    [a, b] = [b, a + b];
  }
  if (b === n) {
    return [a, n, a + b];
  } else {
    return [a, n, b];
  }
};

const collatzLoops = (n: number): number => {
  if (n <= 0) throw new Error("Input must be a positive integer.");
  let count = 0;
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    count++;
  }

  return count;
};

export { findFibonacciNeighbors, collatzLoops };
