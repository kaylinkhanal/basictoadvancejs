const arr = [5, 1, 4];

//Q1. if item is divisible by 2, then multiply it by 3 else multiply it by 2
// expected output: [10, 2, 12]
const output = arr.map((item) => {
  if (item % 2 == 0) {
    // console.log("Divisible by 2", item * 3);
    return item * 3;
  } else {
    // console.log("Not Divisible by 2", item * 2);
    return item * 2;
  }
});
console.log("Converted Items:-", output);

//Q2. use filter to get only those items which are greater than 2
// expected output: [5,4]
const filter = arr.filter((item) => item > 2);
console.log("Item Greater than 2:-", filter);

//Q3. use filter to get only those items which are even
// expected output: [4]
const evenArr = arr.filter((Item) => Item % 2 === 0);
console.log("Even Array:-", evenArr);

//Q4. use map to convert each item to string
// expected output: ['5', '1', '4']
const StringArr = arr.map((item) => item.toString());
console.log("String Array:-", StringArr);

//Q5. use map to get square of each item
// expected output: [25, 1, 16]
const squareArr = arr.map((item) => item * item);
console.log("Square Array:-", squareArr);
