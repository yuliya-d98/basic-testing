import { generateLinkedList } from './index';

// https://jestjs.io/docs/snapshot-testing
describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const result = generateLinkedList<number>([1, 1, 1, 1, 1]);
    expect(result).toStrictEqual({
      value: 1,
      next: {
        value: 1,
        next: {
          value: 1,
          next: {
            value: 1,
            next: {
              value: 1,
              next: {
                value: null,
                next: null,
              },
            },
          },
        },
      },
    });
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const result = generateLinkedList<number>([2, 2, 2, 2]);
    expect(result).toMatchSnapshot();
  });
});
