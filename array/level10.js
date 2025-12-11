const arr = ['ram',90,70, 50]
const arr2 = ['shyam', 99,88,35]

// Q1. create an array which contains names of students only

// hint use typeof operator
<<<<<<< HEAD
// yedi item to typeof 'string' ho vaney matra return garne
const names = arr.concat(arr2).filter((item) => {
    if (typeof item =="string")
    return true;
});
console.log(names);
=======
const names = arr.concat(arr2).filter((item) => {
    // yedi item to typeof 'string' ho vaney matra return garne
});
>>>>>>> 054ec0bba8911df1d57ff4ea3672986e8d9e8a73


// Q2. calculate the total score of ram and shyam 

let sum = 0
<<<<<<< HEAD
arr.concat(arr2).forEach((item) => {
    // yedi item typeof 'number' ho vaney sum ma add garne
    if (typeof item =="number"){
         sum=sum+item;
    }
        return sum
=======
([...arr,...arr2]).forEach((item) => {
    // yedi item typeof 'number' ho vaney sum ma add garne
>>>>>>> 054ec0bba8911df1d57ff4ea3672986e8d9e8a73
});
console.log(sum)