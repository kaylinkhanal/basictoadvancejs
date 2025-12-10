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

//calculate the sum of -ve number in the array 
const number=[-1,4,-5,1,-2,4]
let newsum=number.reduce((acc,nextitem)=>
{

 
    if(nextitem<0){

      acc= acc+nextitem;
    }
     return acc;
},0);
console.log(newsum)