import {
  getBankAccount,
  InsufficientFundsError,
  SynchronizationFailedError,
} from '.';
import _ from 'lodash';

describe('BankAccount', () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks();
  });

  const firstAccountInitialBalance = 200;
  const secondAccountInitialBalance = 500;

  const firstAccount = getBankAccount(firstAccountInitialBalance);
  const secondAccount = getBankAccount(secondAccountInitialBalance);

  test('should create account with initial balance', () => {
    expect(firstAccount.getBalance()).toBe(firstAccountInitialBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() =>
      firstAccount.withdraw(firstAccountInitialBalance + 100),
    ).toThrow(InsufficientFundsError);
  });

  test('should throw error when transferring more than balance', () => {
    expect(() =>
      firstAccount.transfer(firstAccountInitialBalance + 100, secondAccount),
    ).toThrow();
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => firstAccount.transfer(100, firstAccount)).toThrow();
  });

  test('should deposit money', () => {
    const depositAmount = 50;
    firstAccount.deposit(depositAmount);
    expect(firstAccount.getBalance()).toBe(
      firstAccountInitialBalance + depositAmount,
    );
  });

  test('should withdraw money', () => {
    const withdrawAmount = 50;
    firstAccount.withdraw(withdrawAmount);
    expect(firstAccount.getBalance()).toBe(firstAccountInitialBalance);
  });

  test('should transfer money', () => {
    const transferAmount = 100;
    firstAccount.transfer(transferAmount, secondAccount);
    expect(firstAccount.getBalance()).toBe(
      firstAccountInitialBalance - transferAmount,
    );
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    const expectedValue = 1;
    const spy = jest.spyOn(_, 'random');
    spy.mockReturnValue(expectedValue);

    await expect(firstAccount.fetchBalance()).resolves.toEqual(expectedValue);
  });

  test('should set new balance if fetchBalance returned number', async () => {
    const expectedValue = 10;
    const spy = jest.spyOn(firstAccount, 'fetchBalance');
    spy.mockReturnValue(Promise.resolve(expectedValue));

    await expect(firstAccount.fetchBalance()).resolves.toEqual(expectedValue);
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    const spy = jest.spyOn(firstAccount, 'fetchBalance');
    spy.mockReturnValue(Promise.resolve(null));

    await expect(firstAccount.synchronizeBalance()).rejects.toThrow(
      SynchronizationFailedError,
    );
  });
});
