// Q1. write a function that takes in array as input and calculates the length of that array
const calculateArrayLength = (arr) => {
    return arr.length
}
console.log(calculateArrayLength([1,2,3,4,5,6,7,8]))


//Q2. write a function that takes in array of number as an input and calculates the average
// of the numbers
const average = (numArr) => {
    let sum = 0 ;
    numArr.forEach((arr) => {
        sum = sum + arr
});
    return sum / numArr.length
}
console.log(average([10,20,30,40]))



//Q3. write a function that takes in an object as an input and returns the total number of keys
const objKeysLength = (obj) => {
    return Object.keys(obj).length
}   
const sampleObj = {
    name: "John",
    age: 30,
    city: "New York"
}
console.log(objKeysLength(sampleObj))

// const obj =
// const obj3 = (obj)=>{
//     let sum1 = 0;
//     obj.forEach((arr2) => {
//         sum1 = sum1 + arr2
//     });
//     return sum / obj3.length
// }
// console.log(obj3{10 20 30})

//Q4. write a function that takes in array as an input and returns the sum of all the numbers
// using forEach loop inside the function 



setTimeout(() => {
  console.log("Hello");
}, 2000);
// const sumOfArray = (arr) => {
//     let sum = 0 ;
//     arr.forEach((num) => {
//         sum = sum + num;
//     });
//     return sum;
// }
function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // callback function call
}

function sayBye() {
  console.log("Goodbye");
}

greet("Sagun", sayBye);
