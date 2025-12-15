// Q1. write a function that takes in array as input and calculates the length of that array
const fun1 = (arr) => {
  console.log(arr.length);
};
fun1([1, 2, 34]);

//Q2. write a function that takes in array of number as an input and calculates the average
// of the numbers
const fun2 = (arr) => {
  let sum = arr.reduce((acc, cur) => {
    return acc + cur;
  });
  console.log(sum / arr.length);
};
fun2([1, 2, 3]);

//Q3. write a function that takes in an object as an input and returns the total number of keys
const fun3 = (obj) => {
  let keys = Object.keys(obj);
  console.log(keys.length);
};
fun3({
  name: "jagat",
  age: 24,
});

//Q4. write a function that takes in array as an input and returns the sum of all the numbers
// using forEach loop inside the function
const fun4 = (arr2) => {
  let sum = 0;
  arr2.forEach((item) => {
    sum = sum + item;
  });
  return sum;
};
console.log(fun4([1, 2, 3]));
