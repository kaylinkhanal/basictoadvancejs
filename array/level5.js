// Map and Filter

// Map: It creates a new array by performing a function on each item of the original array
// Filter: It creates a new array with all elements that pass the test implemented by the provided function
// syntax for map 

// const mappedArr = arr.map((item) => {
//     return element * 2
// })
//console.log(mappedArr); // [10, 2, 8]
// syntax for filter

// const filteredArr = arr.filter((item) => {
//     return item > 2
// })
// console.log(filteredArr); // [5, 4]
//--------------------
// Condition Exercises
//Difficulty Level 5
// Solve using array.map() and conditional logic


//Q1. if item is divisible by 2, then multiply it by 3 else multiply it by 2
// expected output: [10, 2, 12]
const arr = [5,1,4]
const check = arr.map((num)=>
{ if (num%2 == 0){
return num *3;
}else{
return num*2}
}                  
)
console.log(check);//[ 10, 2, 12 ]
//---------------------------------------------------------------
//Q2. use filter to get only those items which are greater than 2
// expected output: [5,4]

const arrFilter = arr.filter(item => (item>2))
console.log(arrFilter);//[ 5, 4 ]
//---------------------------------------------------------------


