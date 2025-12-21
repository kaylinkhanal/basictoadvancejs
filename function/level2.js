// Q1. write a function that takes in array as input and calculates the length of that array
const arrlength = ((arr) =>{
    return arr.length
});
console.log(arrlength([1,2,3,4,5]));

//Q2. write a function that takes in array of number as an input and calculates the average
// of the numbers
const funArray = (num) =>{
     let sum = 0;
     num.map((num) =>{
        sum = sum + num
     })
 return sum/num.length 
};
console.log(funArray([2,3,4,5,6]))

//Q3. write a function that takes in an object as an input and returns the total number of keys
const student = {
    name: 'abc',
    rollNo: 20,
    class: 4,
    section: "g"
};
console.log(Object.keys(student).length);

//Q4. write a function that takes in array as an input and returns the sum of all the numbers
// using forEach loop inside the function 
const sumArr = (num1) => {
    let sum = 0 ;
    num1.forEach((num1) => {
        sum = sum + num1 
})
   return sum
};
console.log(sumArr([1,2,3,4,5]));