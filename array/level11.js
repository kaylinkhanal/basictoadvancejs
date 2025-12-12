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


const sum = arr.reduce((sum, next) => {
if (next < 0){
    sum= sum + next;
}
return sum;
}, 0);
// const output = arr.reduce((sum,nextItem,nextid,orgArr)=>{
    console.log(sum);
 
// })

// Q2. Find the maximum number in the array using reduce
const maximum = arr.reduce ((item, next) => {
    return Math.max(...arr);
});
console.log(maximum);

// Q3. Flatten an array of arrays using reduce
const arr2 = [1, 2, [3, 4], 5, [6, 7]];
const newArr = arr2.reduce((item, next) => {
return item.concat(next);
}, []);
console.log(newArr);


// Q4. Count the occurrences of each element in an array using reduce
const arr3 = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const occur = arr3.reduce((item, next) => {
    item[next] = (item[next] || 0) +1;
    return item;
}, {});
console.log(occur);

const output = arr.reduce((sum,nextItem,nextid,orgArr)=>{
    if(nextItem < 0){
      sum = sum + nextItem
    }
    return sum
},0)
console.log(output)


let sum = 0 
arr.forEach((item)=>{
    if(item < 0){
        sum = sum + item
    }
})
console.log(sum)

