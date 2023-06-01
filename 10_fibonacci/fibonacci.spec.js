const fibonacci = require('./fibonacci')

describe('Fibonacci', () => {
  test('0th Fibonacci number is 0', () => {
    expect(fibonacci(0)).toBe(0);
  });
  test('4th Fibonacci number is 3', () => {
    expect(fibonacci(4)).toBe(3);
  });
  test('6th Fibonacci number is 8', () => {
    expect(fibonacci(6)).toBe(8);
  });
  test('10th Fibonacci number is 55', () => {
    expect(fibonacci(10)).toBe(55);
  });
  test('15th Fibonacci number is 610', () => {
    expect(fibonacci(15)).toBe(610);
  });
  test('25th Fibonacci number is 75025', () => {
    expect(fibonacci(25)).toBe(75025);
  });
  test('doesn\'t accept negatives', () => {
    expect(fibonacci(-25)).toBe("OOPS");
  });
  test('doesn\'t accept words', () => {
    expect(fibonacci("piccolo")).toBe("OOPS");
  });
  test('DOES accept strings', () => {
    expect(fibonacci("1")).toBe(1);
  });
  test('DOES accept strings', () => {
    expect(fibonacci("2")).toBe(1);
  });
  test('DOES accept strings', () => {
    expect(fibonacci("8")).toBe(21);
  });
});
