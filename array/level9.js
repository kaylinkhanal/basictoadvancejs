const arr = [5,1,2,4]

//Q1. use map to multiply each item by 3 if even and remove the odds ones


const output = arr.map((item) => {
<<<<<<< HEAD
    if(item % 2 ===0){
item = item *3
return item;
    }

=======
    if(item %2 ===0){
        return item * 3
    }
>>>>>>> 584d5fd8c0940d03c72f0350360824a4e70ba7a8
}).filter((item) => {
    return item
});
console.log(output);

console.log(output)
// Q2 use foreach to calculate the sum of all even numbers in the array

<<<<<<< HEAD
// Q2 use foreach to calculate the sum of all even numbers in the array
let sum = 0;
arr.forEach((item) => {
    if (item%2 ===0){
        sum += item
    }
});
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
