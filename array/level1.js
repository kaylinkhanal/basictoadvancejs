// Array 
// ---> [4,5,'3', null, undefined, true, false]]
// based on index
// [ ] big bracket, separated by comma

let ramScore = [95, 92, 87]
let shyamScore = [77, 99, 99]

// Q1. calcuate the length of array
const arrayLength = ramScore.length;
console.log(arrayLength);
const array2Length = shyamScore.length;
console.log(array2Length);

// Q2. get the output of last element of array and check if it is divisible by 21
const lastElement = ramScore[ramScore.length - 1]
if (lastElement % 21 === 0) {
    console.log(true);
} else {
    console.log(false);
}

// Q3. check if ram percentage is greater than shyam percentage

let ramPercent = (ramScore[0] + ramScore[1] + ramScore[2]) / 300 * 100

let shyamPercent = (shyamScore[0] + shyamScore[1] + shyamScore[2]) / 300 * 100
if (ramPercent > shyamPercent) {
    console.log(true)
} else {
    console.log(false)
}

console.log(ramPercent < shyamPercent);//this is faster easier way



//Q4. sort() use case in array
let arr1 = [12, 5, 8, 130, 44];
// Expected Output should be: [5,8,12,44,130]
let arrAscend = arr1.sort((a,b)=>a-b)
console.log(arrAscend);


let arr2 = [3, 45, 2, 67, 34];
// Expected Output: [67,45,34,3,2]
let arrDescend = arr2.sort((a,b)=>b-a)
console.log(arrDescend);

let fruits = ["banana", "apple", "cherry", "date"];
// Expected Output: ["apple","banana","cherry","date"]
fruits.sort()
console.log(fruits);

let names = ["zara", "mohan", "ram", "hari"];
// Expected Output: ["zara","ram","mohan","hari"]
// names.sort().reverse()
// console.log(names);

// Q5: You have a list of names. Swap the second and third elements of the list
// so that the new order is:
// ["zara", "ram", "mohan", "hari"]

// Your code here
[names[1], names[2]] = [names[2], names[1]]
console.log(names);