//--------------------------------------------------
//--------------------------------------------------
// Q1.
// Given: [10, 3, 25, 7, 40]
// If number is divisible by 5 → divide by 5
// Else if number is even → double it
// Else → triple it
// Expected: [2, 9, 5, 21, 8]
const arr = [10, 3, 25, 7, 40];
const arrMapped = arr.map(item =>
    item % 5 === 0 ? item / 5 :
        item % 2 === 0 ? item * 2 :
            item * 3);
console.log(arrMapped);//[ 2, 9, 5, 21, 8 ]

//--------------------------------------------------
//--------------------------------------------------
// Q2.
// Given: ["Ram", "Krishna", "Hari", "Shyam"]
// If name starts with a consonant → return its length
// Else → return the name reversed
// Expected: [3, 7, 4, 5]
const names = ["Ram", "Krishna", "Hari", "Shyam"];
const operateName = names.map(item => ("AEIOU".includes(item[0].toUpperCase())) ?
    item.split("").reverse().join("") : item.length)
console.log(operateName);//[ 3, 7, 4, 5 ]
//--------------------------------------------------
//--------------------------------------------------
// Q3.
// Given: [4, 9, 16, 25, 36]
// If square root is even → return the square root
// Else → return the number itself
// Expected: [2, 9, 4, 25, 6]
const numbers = [4, 9, 16, 25, 36];
const operateNumbers = numbers.map(item => {
    const sqrt = Math.sqrt(item);
    return sqrt % 2 === 0 ? sqrt : item;
});
console.log(operateNumbers);//[ 2, 9, 4, 25, 6 ]


//--------------------------------------------------
//--------------------------------------------------
// Q4.
// Given an array of objects:
// [ {age: 17}, {age: 22}, {age: 14}, {age: 30} ]
// If age >= 18 → return "adult"
// Else → return "minor"
// Expected: ["minor", "adult", "minor", "adult"]

const people = [{ age: 17 }, { age: 22 }, { age: 14 }, { age: 30 }];
const ageCategory = people.map(person =>
    person.age >= 18 ? "adult" : "minor");
console.log(ageCategory);//[ 'minor', 'adult', 'minor', 'adult' ]

//--------------------------------------------------
//--------------------------------------------------
// Q5.
// Given: ["hello", 42, "world", 7, "js", 100]
// If item is a string → uppercase it
// If item is a number and even → divide by 2
// If item is a number and odd → multiply by 3
// Expected: ["HELLO", 21, "WORLD", 21, "JS", 50]
const mixedArr = ["hello", 42, "world", 7, "js", 100];
const operatedArr = mixedArr.map(item => {
    if (typeof item === "string") {
        return item.toUpperCase();
    } else if (typeof item === "number" && item % 2 === 0) {
        return item / 2;
    } else if (typeof item === "number" && item % 2 !== 0) {
        return item * 3;
    }
});
console.log(operatedArr);//[ "HELLO", 21, "WORLD", 21, "JS", 50 ]
//--------------------------------------------------
// END OF FILE
