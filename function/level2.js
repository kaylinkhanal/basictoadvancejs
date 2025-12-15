// Q1. write a function that takes in array as input and calculates the length of that array

const calculateArrayLength = (arr) => {
    return arr.length;
}
console.log(calculateArrayLength([1, 2, 3]))
//Q2. write a function that takes in array of number as an input and calculates the average
// of the numbers
const calculateAverage = (arr) => {
    const sum = arr.reduce((container, nextItem) => (container + nextItem))
    const average = sum / arr.length;
    return average;
}
console.log(calculateAverage([1, 2, 3]))


//Q3. write a function that takes in an object as an input and returns the total number of keys

const objectKeyNumber = (obj) => {
    return Object.keys(obj).length;
}

console.log(objectKeyNumber({ Name: "ram", Class: 10 }));
//Q4. write a function that takes in array as an input and returns the sum of all the numbers
// using forEach loop inside the function 

const sumArr = (arr) => {

    let sum = 0;
    arr.forEach(item => {
        sum = item + sum
    })
    return sum;


}
console.log(sumArr([1, 2, 3]));
console.assert(sumArr([1,2,3]));