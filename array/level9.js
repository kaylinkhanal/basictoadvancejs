const arr = [5, 1, 2, 4];

//Q1. use map to multiply each item by 3 if even and remove the odds ones
let arr2 = arr.map((val) => {
  if(val%2===0){
    return val*3
  }
  
    
}).filter((val)=>{
    return val
});


console.log(arr2)

const output = arr
  .map((item) => {})
  .filter((item) => {
    return item;
  });

// Q2 use foreach to calculate the sum of all even numbers in the array
let sum=0;
let arr3= arr.forEach((val)=>{
if(val%2===0)
sum+=val
})
console.log(sum);