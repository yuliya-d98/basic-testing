// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const expected = 19;
    const result = simpleCalculator({
      a: 7,
      b: 12,
      action: Action.Add,
    });
    expect(result).toBe(expected);
  });

  test('should subtract two numbers', () => {
    const expected = 19;
    const result = simpleCalculator({
      a: 33,
      b: 14,
      action: Action.Subtract,
    });
    expect(result).toBe(expected);
  });

  test('should multiply two numbers', () => {
    const expected = 33;
    const result = simpleCalculator({
      a: 3,
      b: 11,
      action: Action.Multiply,
    });
    expect(result).toBe(expected);
  });

  test('should divide two numbers', () => {
    const expected = 33;
    const result = simpleCalculator({
      a: 66,
      b: 2,
      action: Action.Divide,
    });
    expect(result).toBe(expected);
  });

  test('should exponentiate two numbers', () => {
    const expected = 8;
    const result = simpleCalculator({
      a: 2,
      b: 3,
      action: Action.Exponentiate,
    });
    expect(result).toBe(expected);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({
      a: 2,
      b: 3,
      action: 78,
    });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({
      a: 'aaaaaaaaa',
      b: 'lalalal',
      action: Action.Exponentiate,
    });
    expect(result).toBeNull();
  });
});
