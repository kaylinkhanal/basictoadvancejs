const arr = [5,1,2,4]

<<<<<<< HEAD
//Q1. use map to multiply each item by 2 if even and remove the odds ones
const output = arr.map((item) => {
    if (item%2==0)
        return item*3;

}).filter((item) => {
    return item
});
console.log(output);


// Q2 use foreach to calculate the sum of all even numbers in the array
letevensum=0;
const ram=arr.forEach((item)=>{
    if (item%2==0){
        evensum+=item;
    }
}

);
=======
//Q1. use map to multiply each item by 3 if even and remove the odds ones


const output = arr.map((item) => {
    if(item %2 ===0){
        return item * 3
    }
}).filter((item) => {
    return item
});

console.log(output)
// Q2 use foreach to calculate the sum of all even numbers in the array

let sum = 0
arr.forEach((item) => {
    if(item %2 ===0){
        sum += item
    }
});
console.log(sum)
>>>>>>> 054ec0bba8911df1d57ff4ea3672986e8d9e8a73
