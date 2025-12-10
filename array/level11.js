//reduce
// -> can output single value, single value can be any data types
// -> accumulator(we can define initial value) and current value
// -> if we dont define the initial value, accumulator will capture our first element of array
// -> does not chnage original array
// -> does not execute for empty array if no initial value is provided
// -> loops might run less number of times than forEach and map
// ->

const arr = [-1, 4, -5, 1, -2, 4];
//Q1. calculate the sum of all -ve numbers in the array
const output = arr.reduce((sum, nextItem) => {
  if (nextItem < 0) {
    return sum + nextItem;
  }
  return sum;
}, 0);
console.log(output);

// Q2. From this array, calculate the sum of only positive numbers
const arr1 = [3, -1, 5, -7, 2, 8];
// expected: 3 + 5 + 2 + 8 = 18
const posSum = arr1.reduce((acc, cur) => {
  if (cur > 0) {
    acc = acc + cur;
  }
  return acc;
}, 0);
console.log(posSum);

// Q3. Count how many negative numbers exist in this array
const arr2 = [-4, 2, -7, 9, -1];
// expected: 3
const NegCount = arr2.reduce((acc, cur, id) => {
  if (cur < 0) {
    acc = acc + 1;
  }
  return acc;
}, 0);
console.log(NegCount);

// Q4. Calculate the product of all numbers
const arr3 = [1, 2, 3, 4];
// expected: 24
const product = arr3.reduce((acc, cur) => {
  acc = acc * cur;
  return acc;
}, 1);
console.log(product);

// Q5. Find the maximum number using reduce
const arr4 = [11, 5, 22, 9, 3];
// expected: 22
const maxNum = arr4.reduce((acc, cur) => {
  return Math.max(acc, cur);
});

console.log(maxNum);
//Q7. Count how many numbers are even
const arr6 = [1, 2, 3, 4, 5, 6];
// expected: 3
const evenCount = arr6.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    acc = acc + 1;
  }
  return acc;
}, 0);
console.log(evenCount);

// Q8. Convert array of names into one string
const arr7 = ["Ram", "Sita", "Hari"];
// expected: "Ram Sita Hari"
const reqString = arr7.reduce((acc, cur) => {
  acc = acc + cur;
  return acc;
});
console.log(reqString);

// Q9. Convert digits to a single number
const arr8 = [1, 2, 3, 4];
// expected: 1234
// (Hint: acc * 10 + curr)
const SingleDigit = arr8.reduce((acc, cur) => {
  acc = acc * 10 + cur;
  return acc;
});
console.log(SingleDigit);

// Q10. Count how many numbers are greater than 10
const arr10 = [5, 11, 3, 20, 12, 2];
// expected: 3
const count = arr10.reduce((acc, cur) => {
  if (cur > 10) {
    acc = acc + 1;
  }
  return acc;
}, 0);
console.log(count);
