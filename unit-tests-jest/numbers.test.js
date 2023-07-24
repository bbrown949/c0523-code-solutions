import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0];
    const result = evenNumbers(numbers);
    expect(result).toEqual([4, 10, 0]);
  });
});

describe('toDollars', () => {
  it('returns number in USD dollar format', () => {
    const amount = 11.341;
    const result = toDollars(amount);
    expect(result).toEqual('$11.34');
  });
});

describe('divideBy', () => {
  it('divides each element by the divisor', () => {
    const result = divideBy([2, 4, 6, 8], 2);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});

describe('multiplyBy', () => {
  it('multiplies number values', () => {
    const obj = { foo: 1, bar: 2 };
    const result = multiplyBy(obj, 3);
    expect(result).toEqual({ foo: 3, bar: 6 });
  });
});
