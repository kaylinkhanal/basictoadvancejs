<<<<<<< HEAD
/*const output = arr.map((item) => {

=======
const arr = [5,1,2,4]

//Q1. use map to multiply each item by 3 if even and remove the odds ones


const output = arr.map((item) => {
    if(item %2 ===0){
        return item * 3
    }
>>>>>>> 584d5fd8c0940d03c72f0350360824a4e70ba7a8
}).filter((item) => {
    return item
});*/

const arr = [5,1,2,4]

//Q1. use map to multiply each item by 2 if even and remove the odds ones
const array2 = arr.map((item) =>{
 if(item % 2 === 0)
    return item *3 ;
}).filter((item) =>{
    return item
})
console.log(array2);

console.log(output)
// Q2 use foreach to calculate the sum of all even numbers in the array

<<<<<<< HEAD



// Q2 use foreach to calculate the sum of all even numbers in the array
let sum = 0 ;
const array3 = arr.forEach((item)=>{
    if(item % 2 === 0)
        sum = item + sum
        
})
console.log(sum);
=======
let sum = 0
arr.forEach((item) => {
    if(item %2 ===0){
        sum += item
    }
});
console.log(sum)
>>>>>>> 584d5fd8c0940d03c72f0350360824a4e70ba7a8
