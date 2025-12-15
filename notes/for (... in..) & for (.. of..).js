// ###Using for...in (Keys/Properties)
// for...in is best suited for objects where you need to access the property names. 

// const obj = { a: 1, b: 2, c: 3 };

// for (const key in obj) {
//   console.log(key);      // Logs "a", "b", "c"
//   console.log(obj[key]); // Logs 1, 2, 3
// }




// const user = {
//     name: 'Alice',
//     age: 30
// };

// for (let key in user) {
//     console.log(key + ': ' + user[key]);
//     // Output:
//     // name: Alice
//     // age: 30
// }

// const numbers = [10, 20, 30];
// for (let index in numbers) {
//     console.log(index);
//     // Output:
//     // 0
//     // 1
//     // 2
// }
// Note: When used with arrays, for...in returns the indices as strings, not numbers, and 
// can include unexpected properties, which is why it is not recommended for arrays. 



//### Using for...of (Values)
// for...of is the modern, preferred way to iterate over the values of arrays and other iterable collections. 
// const arr = [1, 2, 3];

// for (const value of arr) {
//   console.log(value); // Logs 1, 2, 3
// }





// const numbers = [10, 20, 30];
// for (let value of numbers) {
//     console.log(value);
//     // Output:
//     // 10
//     // 20
//     // 30
// }

// const greeting = "Hello";
// for (let char of greeting) {
//     console.log(char);
    // Output:
    // H
    // e
    // l
    // l
    // o
// }
/*Note: You cannot use for...of directly on a plain object. Attempting to do so will throw a TypeError 
because standard objects are not iterable by default. To loop over object values or entries with for...of, 
you can use methods like Object.values(obj) or Object.entries(obj). */
