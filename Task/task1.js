/*******************************
 * 1. Check Age Category
 *******************************/
const checkAge = (age) => {
    if (age > 0 && age < 10) {
        return "It is a Toddler";
    } else if (age >= 10 && age < 18) {
        return "He/She is Underage!";
    } else {
        return "He/She is an Adult";
    }
};

// Output
console.log(checkAge(25)); 
// => He/She is an Adult



/*******************************
 * 2. Double Numbers Using map()
 *******************************/
const numbers = [1, 2, 3, 4, 5];

// Double each element
const doubled = numbers.map(num => num * 2);

console.log(doubled);
// => [ 2, 4, 6, 8, 10 ]



/***************************************
 * 3. Find Length of Each Word in Array
 ***************************************/
const words = ["apple", "banana", "code", "javascript"];

// Map each word to its length
const wordLengths = words.map(word => word.length);

console.log(wordLengths);
// => [ 5, 6, 4, 10 ]



/*******************************
 * 4. Square Each Number
 *******************************/
const digits = [1, 2, 3, 4, 5];

// Square each element
const squares = digits.map(num => num ** 2);

console.log(squares);
// => [ 1, 4, 9, 16, 25 ]



/*******************************
 * 5. Greet Each Name
 *******************************/
const names = ["Alice", "Bob", "Charlie"];

// Add greeting to each name
const greetings = names.map(n => `Hello! ${n}`);

console.log(greetings);
// => [ 'Hello! Alice', 'Hello! Bob', 'Hello! Charlie' ]



/***********************************************
 * 6. Extract Ages & Create a New Array of Ages
 ***********************************************/
const users = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 }
];

// Extract age from each object
const userAges = users.map(user => user.age);

console.log(userAges);
// => [ 20, 25, 30 ]
