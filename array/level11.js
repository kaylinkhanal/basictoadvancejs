//reduce
// -> can output single value, single value can be any data types
// -> accumulator(we can define initial value) and current value
// -> if we dont define the initial value, accumulator will capture our first element of array
// -> does not chnage original array
// -> does not execute for empty array if no initial value is provided
// -> loops might run less number of times than forEach and map
// ->


//Q1. calculate the sum of all -ve numbers in the array

const arr = [-1,4,-5,1,-2,4];
const output = arr.reduce((a,b)=> b<0 ?  a+b: a);
console.log(output)


let sum = 0 
arr.forEach((item)=>{
    if(item < 0){
        sum = sum + item
    }
})
console.log(sum)