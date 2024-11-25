import {
  sum50to100,
  showMultiplicationTableOf7,
  calculateArithmeticMean,
} from './HW3';

describe('sum50to100', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('console.log shows sum', () => {
    const logSpy = jest.spyOn(console, 'log');
    sum50to100();
    expect(logSpy).toHaveBeenCalledWith(3825);
  });
});

describe('Check Multiplication Table of 7', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('console.log shows table', () => {
    const logSpy = jest.spyOn(console, 'log');
    showMultiplicationTableOf7();
    expect(logSpy).not.toBeNull();
  });
});

describe('Calculate arithmetic mean', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('calculate arithmetic mean for 5 to return', () => {
    jest.spyOn(window, 'prompt').mockReturnValue('5');
    const logSpy = jest.spyOn(console, 'log');
    calculateArithmeticMean();
    expect(logSpy).toHaveBeenCalledWith(3);
  });
});
