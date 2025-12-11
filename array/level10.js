const arr = ['ram','hari',90,70, 50]
const arr2 = ['shyam', 99,88,35]

// Q1. create an array which contains names of students only
let namess = [arr[0],arr2[0]]
console.log(namess)

// hint use typeof operator
const names = arr.concat(arr2).filter((item) => {
    if(typeof(item)=== 'string') {
        return item
    }
    // yedi item to typeof 'string' ho vaney matra return garne
    if(typeof(item) === "string"){
        return item
    }
});
console.log(names)

// Q2. calculate the total score of ram and shyam 

let sum = 0
<<<<<<< HEAD
let array4 =([...arr,...arr2]).forEach((item) => {
=======
arr.concat(arr2).forEach((item) => {
    if(typeof(item)=== 'number') {
        sum = sum + item
    }
>>>>>>> e1095ca19ca34d706bcfc921fa3a3413297f990e
    // yedi item typeof 'number' ho vaney sum ma add garne
    if (typeof item === "number"){
        sum = item + sum
    }
});
console.log(sum)