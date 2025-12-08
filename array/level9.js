/*const output = arr.map((item) => {

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





// Q2 use foreach to calculate the sum of all even numbers in the array
let sum = 0 ;
const array3 = arr.forEach((item)=>{
    if(item % 2 === 0)
        sum = item + sum
        
})
console.log(sum);