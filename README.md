# rounded-percentage

The library takes a list of percentages and returns the list of tuples of percentages and rounded percentages.

The [Largest Remainder Method](https://en.wikipedia.org/wiki/Largest_remainder_method) is used to calculate rounded percentage keeping the sum of them correct (add up to 100%).

## Params

- `percentages`: Array of percentages to be rounded. Can also be any other type that can be converted to a number (see `percentageSelector` parameter).
- `percentageSelector`: Function to convert the value to a number. It can be a selector for a percantage value from an object.

## Return value

A list of tuples of the original percentages (or any other original type) and the rounded percentages.

## Usage examples

```typescript
import { roundedPercentage } from '@aeldar/rounded-percentage';

const percentages = [8.3, 1.1, 3.6, 2.25, 2.25, 2.25, 2.25, 64.8, 13.2];

const roudedPercentages = roundedPercentage(percentages, x => x);

console.log(roudedPercentages);

// [
//  [8.3, 9], [1.1, 1], [3.6, 4], [2.25, 2], [2.25, 2], [2.25, 2], [2.25, 2], [64.8, 65], [13.2, 13]
// ]
```
