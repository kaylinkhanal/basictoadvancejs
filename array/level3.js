//================================================================================================
//?                   OBJECT ORIENTED ARRAY PROBLEMS
//================================================================================================

let people = [
    { name: "Aaku", age: 25 },
    { name: "Baku", age: 19 },
    { name: "Chaku", age: 30 },
];
// Sort by age ascending
// Expected Output: [{name: "B", age: 19}, {name: "A", age: 25}, {name: "C", age: 30}]
people_age = people.map((peoples) => peoples.age);
console.log(people_age); //[ 25, 19, 30 ]
people_age.sort();
console.log(people_age); //[ 19, 25, 30 ]---> using map property

people.sort((a, b) => a.age - b.age);
console.log(people);
//  Output: [{ name: 'Baku', age: 19 },
//  { name: 'Aaku', age: 25 },
//  { name: 'Chaku', age: 30 }]

let students = [
    { name: "Hari", grade: 80 },
    { name: "Anu", grade: 95 },
    { name: "Kiran", grade: 75 },
];
// Sort by grade descending
// Expected Output: [{name: "Anu", grade: 95}, {name: "Hari", grade: 80}, {name: "Kiran", grade: 75}]
students.sort((a, b) => b.grade - a.grade);
console.log(students);

let dates = [
    new Date("2021-03-25"),
    new Date("2020-11-02"),
    new Date("2022-01-10"),
];
// Sort from oldest → newest
// Expected Output: [new Date("2020-11-02"), new Date("2021-03-25"), new Date("2022-01-10")]

dates.sort((a, b) => a - b);
console.log(dates);

//================================================================================================
//?                   MORE QUESTIONS TO SOLVE AND UNDERSTAND ARRAY
//================================================================================================

const arr = ["ram", 90, 70, 50];
const arr2 = ["shyam", 99, 88, 35];

// Q1. create an array which contains names of students only

// hint use typeof operator
arr3 = [...arr, ...arr2];
const arrName = arr3.filter((item) => typeof item === "string");
console.log(arrName);
//[ 'ram', 'shyam' ]

//-----------------------------------------------------------

// Q2. calculate the total score of ram and shyam
let totalScore = 0;
const arrScore = arr3
    .filter((item) => typeof item === "number")
    .forEach((item) => {
        totalScore += item;
    });
console.log(totalScore); //432
//==========================================================

const nums = [-1, 4, -5, 1, -2, 4];
//Q1. calculate the sum of all -ve numbers in the array

const numSum = nums
    .filter((item) => item < 0)
    .reduce((container, nextItem) => {
        container += nextItem;
        return container;
    });
console.log(numSum);

//==========================================================

// Q1.Return a new array containing the **square** of only the **even** numbers.
// Expected Output:[4, 16, 36, 64]

const num = [1, 2, 3, 4, 5, 6, 7, 8];
const numEvenSq = num.filter((item) => item % 2 === 0).map((item) => item ** 2);
console.log(numEvenSq);

//------------------------------------------------------------

//Q2.Flatten this array of depth 2 into a single array.
//Expected Output:[1, 2, 3, 4, 5, 6]

const num1 = [
    [1, 2],
    [3, 4, 5],
    [6, [7, [8, 9]]],
];

//Method -1 using flat()
//shallow flattened
const num1Flat = num1.flat().flat().flat(); // just for fun lol
console.log(num1Flat);

//Method - 2 using spread operator and concat
//shallow flattened

const num1Flat1 = [].concat(...num1);
console.log(num1Flat1);

//------------------------------------------------------------

// Q3.Return a new array containing the strings that are **longer than 5 characters**, converted to **uppercase**.
// Expected Output:['BANANA', 'GRAPEFRUIT']

const str = ["apple", "banana", "kiwi", "grapefruit", "cat"];
const strFilter = str
    .filter((item) => item.length > 5)
    .map((item) => item.toUpperCase());
console.log(strFilter);

//------------------------------------------------------------

// Q4.Use the `reduce()` method to find the **sum** of all numbers.
// Expected Output:15

const num3 = [1, 2, 3, 4, 5];
const num3Sum = num3.reduce((container, nextItem) => {
    container += nextItem;
    return container;
});
console.log(num3Sum);

//------------------------------------------------------------

// Q5.Use `reduce()` to count the frequency of each element, returning an object.
// Expected Output:{'apple': 2, 'banana': 1, 'orange': 3}

const string = ["apple", "banana", "orange", "apple", "orange", "orange"];
const strCount = string.reduce((container, nextItem) => {
    container[nextItem] = (container[nextItem] || 0) + 1;
    return container;
}, {});
console.log(strCount);

/*******************************
 *? End of file
 *******************************/
