const arr = [5, 1, 4];
// Q1. If the item is odd → square it, if even → cube it
// expected output: [25, 1, 64]
const result = arr.map((item) => {
  if (item % 2 != 0) {
    return item ** 2;
  } else {
    return item ** 3;
  }
});
console.log("Output :-", result);

// Q2. Filter numbers whose square is greater than 10
// expected output: [5, 4]
const numSquare = arr.filter((item) => item ** 2 > 10);
console.log("Numbers whose square is greater than 10", numSquare);

// Q3. Map each item to: "even-<value>" or "odd-<value>"
// expected output: ['odd-5', 'odd-1', 'even-4']
const oddevenArr = arr.map((item) => {
  if (item % 2 !== 0) {
    return `Odd - ${item}`;
  } else {
    return `Even - ${item}`;
  }
});
console.log(oddevenArr);

//Q4. Filter only those items where item + index is even
// expected output: [1, 4]
const PureEvenItem = arr.filter((item, index) => {
  return (item + index) % 2 === 0;
});

console.log(PureEvenItem);
// Q5. Map: multiply each number by its own index
// expected output: [0, 1, 8]
const result4 = arr.map((item, index) => {
  return item * index;
});
console.log(result4);

// Q6. Convert each number to an object: { value: item, isEven: true/false }

const result5 = arr.map((item) => {
  return {
    value: item,
    isEven: item % 2 === 0,
  };
});
console.log(result5);
