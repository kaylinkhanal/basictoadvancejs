const arr = [3,4,5,6,1]

const arr2 = [6,2,3,1,5]


//Q1.  Output should be [3,4,5,6,1,6,2,3,1,5]
<<<<<<< HEAD

const combined = arr.concat(arr2);
console.log(combined); 


=======
console.log([...arr, ...arr2]);
>>>>>>> e1095ca19ca34d706bcfc921fa3a3413297f990e

//Q2. output shoulb be [5,1,3,2,6]
console.log(arr2.reverse())

const reversedArr = arr2.reverse();

console.log(reversedArr); 

//Q3. Create an array of 5 fruits and print the second fruit.
let fruits = ["apple", "mango", "banana", "orange", "grapes"];
console.log(fruits[1]);

//Q4. Change the value of the third element in an array.
let nums = [10, 20, 30, 40];
nums[2] = 99;
console.log(nums);


//Q5.Find how many times 5 appears in the array.

let count = arr.filter(x => x === 5).length;
console.log(count);

//06. Reverse an array.


console.log(arr.reverse());

//7.Sort in ascending order
console.log(arr.sort());

//8 Multiply each element by 2 using map().

let result = arr.map(x => x * 2);
console.log(result);

//Q9. Find the sum of all elements in the array.

let sum = arr.reduce((a, b) => a + b);
console.log(sum);


//Q10. Check if all values in array are greater than 10.

console.log(arr.every(x => x > 10));






// hw: map vs foreach vs filter  in array