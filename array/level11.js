//reduce
// -> can output single value, single value can be any data types
// -> accumulator(we can define initial value) and current value
// -> if we dont define the initial value, accumulator will capture our first element of array
// -> does not chnage original array
// -> does not execute for empty array if no initial value is provided
// -> loops might run less number of times than forEach and map
// ->

const arr = [-1,4,-5,1,-2,4]
//Q1. calculate the sum of all -ve numbers in the array
const output = arr.reduce((sum,nextItem,nextid,orgArr)=>{
<<<<<<< HEAD
 if(nextItem < 0){
    sum = sum + nextItem
 }
},0)
console.log(output);


=======
    if(nextItem < 0){
      sum = sum + nextItem
    }
    return sum
},0)
console.log(output)
>>>>>>> e1095ca19ca34d706bcfc921fa3a3413297f990e


let sum = 0 
arr.forEach((item)=>{
    if(item < 0){
        sum = sum + item
    }
})
console.log(sum)