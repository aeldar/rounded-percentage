// The Largest Remainder Method is used to calculate rounded percentage keeping the sum of them correct (add up to 100%).
// Attention! The output order doesn't correspond to the input order.
// See here: https://en.wikipedia.org/wiki/Largest_remainder_method
export function roundedPercentage<T>(selector: (x: T) => number, xs: T[]): [T, number][] {
  // calculate the difference between the 100% and the sum of the rounded percentages
  const difference = 100 - xs.reduce((acc, curr) => acc + Math.abs(Math.floor(selector(curr))), 0);

  // sort in descendant order by decimal part of the real percentage
  const sortedByDecimalPart = [...xs].sort((a, b) => {
    const aPercentage = selector(a);
    const bPercentage = selector(b);
    return bPercentage - Math.floor(bPercentage) - (aPercentage - Math.floor(aPercentage));
  });

  // distribute the difference between the rounded values in decreasing order of their decimal parts
  const { result } = sortedByDecimalPart.reduce(
    ({ difference, result }, curr) =>
      difference > 0
        ? {
            difference: difference - 1,
            result: [...result, [curr, Math.floor(selector(curr)) + 1] as [T, number]],
          }
        : {
            difference: 0,
            result: [...result, [curr, Math.floor(selector(curr))] as [T, number]],
          },
    { difference, result: [] as [T, number][] },
  );

  return result;
}
