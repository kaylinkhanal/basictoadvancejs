const arr = [3,4,5,6,1]

const arr2 = [6,2,3,1,5]


//Q1.  Output should be [3,4,5,6,1,6,2,3,1,5]

console.log(arr.concat(arr2))     //for arrays
console.log(arr  + (arr2))
//console.log(str1.concat(" ", str2);)  -->for strings

//Q2. output shoulb be [5,1,3,2,6]

console.log([...arr, ...arr2]);

//Q2. output shoulb be [5,1,3,2,6]
console.log(arr2.reverse())

// hw: map vs foreach vs filter  in array
/*
=> forEach()
-Iterates over each element in an array and executes a provided callback function for each element.

const numbers = [1, 2, 3];
numbers.forEach(number => console.log(number * 2));
// -->Output: 2, 4, 6
// -->numbers remains [1, 2, 3]

=> map()
-Transforms each element in an array based on a provided callback function and returns a new array containing the results of the transformation.

const numbers = [1, 2, 3];
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6]
console.log(numbers);       // Output: [1, 2, 3]

=> filter()
-Creates a new array containing only the elements from the original array that satisfy a provided test condition (return true from the callback function).

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
console.log(numbers);     // Output: [1, 2, 3, 4, 5]

Return Value: forEach returns undefined, while map and filter return new arrays.
Immutability: map and filter are designed to be immutable, creating new arrays and leaving the original untouched. forEach can be used to modify the original array, but this is generally not its primary purpose and can lead to less predictable code.
Transformation vs. Selection: map is for transforming elements, while filter is for selecting elements. forEach is for performing actions on elements without necessarily transforming or selecting them for a new array.

*/