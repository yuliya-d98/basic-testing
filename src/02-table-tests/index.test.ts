import { simpleCalculator, Action } from './index';

enum TestMessages {
  Add = 'should add two numbers',
  Subtract = 'should subtract two numbers',
  Multiply = 'should multiply two numbers',
  Divide = 'should divide two numbers',
  Exponentiate = 'should exponentiate two numbers',
  InvalidAction = 'should return null for invalid action',
  InvalidArguments = 'should return null for invalid arguments',
}

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3, message: TestMessages.Add },
  { a: 2, b: 2, action: Action.Add, expected: 4, message: TestMessages.Add },
  { a: 3, b: 2, action: Action.Add, expected: 5, message: TestMessages.Add },
  { a: 7, b: 12, action: Action.Add, expected: 19, message: TestMessages.Add },
  {
    a: 33,
    b: 14,
    action: Action.Subtract,
    expected: 19,
    message: TestMessages.Subtract,
  },
  {
    a: 3,
    b: 11,
    action: Action.Multiply,
    expected: 33,
    message: TestMessages.Multiply,
  },
  {
    a: 66,
    b: 2,
    action: Action.Divide,
    expected: 33,
    message: TestMessages.Divide,
  },
  {
    a: 2,
    b: 3,
    action: Action.Exponentiate,
    expected: 8,
    message: TestMessages.Exponentiate,
  },
  {
    a: 2,
    b: 3,
    action: 78,
    expected: null,
    message: TestMessages.InvalidAction,
  },
  {
    a: 'aaaaaaaaa',
    b: 'lalalal',
    action: Action.Exponentiate,
    expected: null,
    message: TestMessages.InvalidArguments,
  },
];

describe('simpleCalculator', () => {
  test.each(testCases)('$message', ({ a, b, action, expected }) => {
    const result = simpleCalculator({ a, b, action });
    if (typeof expected === 'number') {
      expect(result).toBe(expected);
    } else {
      expect(result).toBeNull();
    }
  });
});
