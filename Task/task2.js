// hw: map vs foreach vs filter  in array
/***********************************************
    * 1!. Extract Ages & Create a New Array of Ages---> use of map()
 ***********************************************/
const users = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 }
];
const userAge = users.map(user => user.age)
console.log(userAge);// Output: [20, 25, 30]
/***********************************************
    * 2. Filter Even Numbers from an Array---> use of filter()
***********************************************/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0)
console.log(evenNumbers)//[ 2, 4, 6, 8, 10 ]


/***********************************************/
// . Log Each Element with forEach ---> use of forEach()
/***********************************************/
const fruits = ["apple", "banana", "cherry", "date"];
fruits.forEach(fruit => console.log(fruit));
// Output:
// apple
// banana
// cherry
// date

const nums = [1, 2, 3];
nums.forEach(n => console.log(n * 2)); // prints: 2, 4, 6
const arr = [10, 20, 30];
arr.forEach(arr=> console.log(arr*3))