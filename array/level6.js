//Sum all numbers in an array
const numbers = [1, 2, 3, 4, 5];
let  sum=numbers.reduce((acc,current)=>{
    return acc+current;
});
console.log(sum);

// Find the maximum number using reduce
const nums = [10, 5, 20, 8];

const maxNum = nums.reduce((max, current) => {
  return current > max ? current : max;
}, nums[0]);

console.log(maxNum);

//Count how many times each item appears
const fruits = ["apple", "banana", "apple", "orange", "banana"];

let count= fruits.reduce((acc,val)=>
{  
    acc[val] = (acc[val] || 0) + 1;

  return acc;
}, {});
console.log(count)
