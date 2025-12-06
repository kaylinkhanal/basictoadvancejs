const arr = [3,4,5,6,1]

const arr2 = [6,2,3,1,5]


//Q1.  Output should be [3,4,5,6,1,6,2,3,1,5]
const mergearray=arr.concat(arr2)
console.log(mergearray)


//Q2. output shoulb be [5,1,3,2,6]
const reversed=arr2.reverse()
console.log(reversed)

// Q3. output should be [1,2,3,5,6]
  console.log(arr2.sort());



// hw: map vs foreach vs filter  in array

//forEach  

//The foreach method is used to iterate through an array and perform some operation for each Element. It doesn't create a new array. returns nothing(undefined)


const ingredients = [ 'Sugar', 'Eggs', 'Butter', 'Milk'];

console.log('--- Shopping List Items ---');

// Use forEach to iterate over the array
ingredients.forEach(function(item) {
  // This function runs once for each item
  console.log(`Don't forget the: ${item}`);
});

console.log('--- Finished Listing ---');

/*
Output in the console:

--- Shopping List Items ---
Don't forget the: Sugar
Don't forget the: Eggs
Don't forget the: Butter
Don't forget the: Milk
--- Finished Listing ---
*/


//Filter
//creates a new array containing only the elements that satisfy a specific condition.Returns: A new array with selected elements (may be shorter than the original).

// Initial array of temperatures (in Celsius)
const temperatures = [2, 15, -5, 25, 0, 30];

// Create a new array with only temperatures above 10°C
const hotDays = temperatures.filter((temp) => temp > 10);

// Output
console.log(hotDays);   // [15, 25, 30]
console.log(temperatures); // Original array remains unchanged



//Map
//creates a new array by applying a function to each element of the original array, effectively transforming the data.
//Returns: A new array of the same length containing the transformed elements.

// Initial array of products with prices
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Mouse', price: 25 },
  { name: 'Keyboard', price: 75 },
];

// Create a new array containing just the names of the products
const productNames = products.map((product) => {
  return product.name.toUpperCase(); // Transforming objects into uppercase strings
});

// Output
console.log(productNames); // ['LAPTOP', 'MOUSE', 'KEYBOARD']
console.log(products);    // Original array remains unchanged