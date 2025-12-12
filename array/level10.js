const arr = ['ram',90,70, 50]
const arr2 = ['shyam', 99,88,35]

// Q1. create an array which contains names of students only

// hint use typeof operator
const names = arr.concat(arr2).filter((item) => {
<<<<<<< HEAD
    if (typeof item === 'string' ){
        return item;
    }
});
console.log(names)

=======
    if(typeof(item)=== 'string') {
        return item
    }
    // yedi item to typeof 'string' ho vaney matra return garne
});
console.log(names)
>>>>>>> e1095ca19ca34d706bcfc921fa3a3413297f990e

// Q2. calculate the total score of ram and shyam 

let sum = 0
<<<<<<< HEAD
arr.concat(arr).forEach((item) => {
    if (typeof item === 'number'){
        sum = sum + item ;
    }
=======
arr.concat(arr2).forEach((item) => {
    if(typeof(item)=== 'number') {
        sum = sum + item
    }
    // yedi item typeof 'number' ho vaney sum ma add garne
>>>>>>> e1095ca19ca34d706bcfc921fa3a3413297f990e
});
console.log(sum)