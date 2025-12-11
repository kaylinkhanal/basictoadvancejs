const arr = [3, 4, 5, 6, 1];

const arr2 = [6, 2, 3, 1, 5];

//Q1.  Output should be [3,4,5,6,1,6,2,3,1,5]
const result = arr.concat(arr2);
console.log(result);

//Q2. output shoulb be [5,1,3,2,6]
const reverseArr2 = arr2.reverse();
console.log(reverseArr2);

// hw: map vs foreach vs filter  in array

//For Each

//forEach() executes a function once for each element in an array.
//It is used for performing actions (like logging, updating variables),not for creating a new array.
//It does not return anything (returns undefined).

const number = [1, 2, 3];

number.forEach(num => {
  console.log(num * 2); 
});
// Output:
// 2
// 4
// 6



// filter()

//Creates a new array with only the elements that pass a condition.-- returns true.

//It is used for selecting items.


const numbers = [1, 2, 3, 4, 5];

const even = numbers.filter(num => num % 2 === 0);

console.log(even); 
// Output: [2, 4]



//map()

////Creates a new array by applying a function to each element.---Returns: A new array

//It is used for transforming items.

const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
// Output: [2, 4, 6]

