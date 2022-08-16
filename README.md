# @aeldar/rounded-percentage

A function `roundedPercentage`, which takes a list of items with percentages and returns the list of tuples of original items and rounded percentages.

The [Largest Remainder Method](https://en.wikipedia.org/wiki/Largest_remainder_method) is used to calculate rounded percentage keeping the sum of them correct (added up to 100%).

## Signature

```typescript
function roundedPercentage<T>(selector: (x: T) => number, xs: T[]): [T, number][];
```

## Params

- `selector`: a function to extract the real percentage value from every list item.
- `xs`: an array of items with percentages. Can be any type that can be converted to a number with the provided `selector`.

## Return value

A list of tuples of the original percentages (or any other original type) and the rounded percentages.

## Usage examples

```typescript
import { roundedPercentage } from '@aeldar/rounded-percentage';

const percentages = [8.3, 1.1, 3.6, 2.25, 2.25, 2.25, 2.25, 64.8, 13.2];

const roudedPercentages = roundedPercentage(x => x, percentages);

console.log(roudedPercentages);

// [
//  [8.3, 9], [1.1, 1], [3.6, 4], [2.25, 2], [2.25, 2], [2.25, 2], [2.25, 2], [64.8, 65], [13.2, 13]
// ]
```
