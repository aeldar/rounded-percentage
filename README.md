# @aeldar/rounded-percentage

[![GitHub license][license-badge]][license-url] [![npm version][npm-badge]][npm-url] [![CI Status][ci-badge]][ci-url] [![Size Status][size-badge]][size-url]

[npm-badge]: https://img.shields.io/npm/v/@aeldar/rounded-percentage
[npm-url]: https://www.npmjs.com/package/@aeldar/rounded-percentage
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://github.com/aeldar/rounded-percentage/blob/main/LICENSE
[ci-badge]: https://github.com/aeldar/rounded-percentage/actions/workflows/main.yml/badge.svg
[ci-url]: https://github.com/aeldar/rounded-percentage/actions/workflows/main.yml
[size-badge]: https://github.com/aeldar/rounded-percentage/actions/workflows/size.yml/badge.svg
[size-url]: https://github.com/aeldar/rounded-percentage/actions/workflows/size.yml


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

A list of tuples `[item, roundedPercentage]` where:
- `item` is the original item from the input list (the reference is kept in case of an `object` item, so can be used for shallow comparison);
- `roundedPercentage` is, hmm..., the rounded percentage.

ATTENTION! The initial order of items is not preserved.

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
