

// Q1. write a function that takes in array as input and calculates the length of that array
const arrayLength = (arr) => {
    return arr.length;
    

}
console.log(arrayLength([1,2,3,4]));


//Q2. write a function that takes in array of number as an input and calculates the average
// of the numbers
/*const arr2 =[1,2,3,4,5,6];
 let sum = arr2.reduce((a, b) => a + b, 0);

let average = sum/arr2.length;
console.log(average);
*/

const calculateAverage = (numArr) => {
    let sum = 0;
    numArr.forEach((item) => {
        sum = sum + item;
    

    });
    return sum/numArr.length;
}

console.log(calculateAverage([10,20,30,40]));






//Q3. write a function that takes in an object as an input and returns the total number of keys
function getKeys(obj){
    return Object.keys(obj);
}
console.log(getKeys({name: "John", age: 30}));



//Q4. write a function that takes in array as an input and returns the sum of all the numbers
// using forEach loop inside the function 
function sumNumbers(arr){
    let sum = 0;
    arr.forEach((item) => {
      sum = sum + item;       
    });
    return sum;
}
console.log(sumNumbers([1,2,3,4,5]));