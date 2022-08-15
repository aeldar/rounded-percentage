import { roundedPercentage } from './rounded-percentage';

describe('roundedPercentage', () => {
  it('should return an empty array for provided empty array', () => {
    expect(roundedPercentage([], (x) => x)).toEqual([]);
  });

  it('should return same percentages when provided with integer percentage', () => {
    const input = [10, 4, 72, 14];
    const inputSelector = (i: number) => i;
    const expectedOutput = input.map((i) => [i, i]);

    const output = roundedPercentage(input, inputSelector);

    // validate input and expected output first (add up to 100%)
    expect(input.reduce((acc, curr) => acc + inputSelector(curr), 0)).toBe(100);
    expect(expectedOutput.reduce((acc, [_, p]) => acc + p, 0)).toBe(100);

    expect(output.sort()).toEqual(expectedOutput.sort());
  });

  it('should calculate rounded percentage when provided real percentage with decimal parts', () => {
    const input = [8.3, 1.1, 3.6, 2.25, 2.25, 2.25, 2.25, 64.8, 13.2];
    const inputSelector = (i: number) => i;
    // difference = 3
    const expectedOutput = [
      [8.3, 8 + 1],
      [1.1, 1],
      [3.6, 3 + 1],
      [2.25, 2],
      [2.25, 2],
      [2.25, 2],
      [2.25, 2],
      [64.8, 64 + 1],
      [13.2, 13],
    ];

    const output = roundedPercentage(input, inputSelector);

    // validate input and expected output first (add up to 100%)
    expect(input.reduce((acc, curr) => acc + inputSelector(curr), 0)).toBe(100);
    expect(expectedOutput.reduce((acc, [_, p]) => acc + p, 0)).toBe(100);

    expect(output.sort()).toEqual(expectedOutput.sort());
  });

  it('should extract percentage from compound input items using provided `percentageSelector`', () => {
    const createItem = (percentage: number) => ({ name: `hello-${percentage}`, p: percentage });

    const input = [createItem(10), createItem(4), createItem(72), createItem(14)];
    const inputSelector = <T extends { p: number }>(i: T) => i.p;
    const output = input.map((i) => [i, inputSelector(i)]);

    expect(roundedPercentage(input, inputSelector).sort()).toEqual(output.sort());
  });
});
