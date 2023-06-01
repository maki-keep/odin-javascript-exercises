const palindromes = require('./palindromes')

describe('palindromes', () => {
  test('works with single words', () => {
    expect(palindromes('racecar')).toBe(true);
  });
  test('works with single words', () => {
    expect(palindromes('hello')).toBe(false);
  });
  test('works with punctuation ', () => {
    expect(palindromes('racecar!')).toBe(true);
  });
  test('works with punctuation ', () => {
    expect(palindromes('hello!')).toBe(false);
  });
  test('works with upper-case letters ', () => {
    expect(palindromes('Racecar!')).toBe(true);
  });
  test('works with upper-case letters ', () => {
    expect(palindromes('Hello!')).toBe(false);
  });
  test('works with multiple words', () => {
    expect(palindromes('A car, a man, a maraca.')).toBe(true);
  });
  test('works with multiple words', () => {
    expect(palindromes('Hello, world!')).toBe(false);
  });
  test('works with multiple words', () => {
    expect(palindromes('Animal loots foliated detail of stool lamina.')).toBe(true);
  });
  test('doesn\'t just always return true', () => {
    expect(palindromes('ZZZZ car, a man, a maracaz.')).toBe(false);
  });
  test('works with numbers in a string', () => {
    expect(palindromes('rac3e3car')).toBe(true);
  });
  test('works with underscores', () => {
    expect(palindromes('__racecar_racecar__')).toBe(true);
  });
  test('works with underscores', () => {
    expect(palindromes('__snake_case__')).toBe(false);
  });
});
