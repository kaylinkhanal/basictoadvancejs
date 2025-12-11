const arr = ['ram',90,70, 50]
const arr2 = ['shyam', 99,88,35]

// Q1. create an array which contains names of students only
// hint use typeof operator
<<<<<<< HEAD

const names = arr.concat(arr2).filter((item1) => {
=======
const names = arr.concat(arr2).filter((item) => {
    if(typeof(item)=== 'string') {
        return item
    }
>>>>>>> e1095ca19ca34d706bcfc921fa3a3413297f990e
    // yedi item to typeof 'string' ho vaney matra return garne

if(typeof item1=== "string"){
    return item1
}
});
console.log(names)
<<<<<<< HEAD

=======
>>>>>>> e1095ca19ca34d706bcfc921fa3a3413297f990e

// Q2. calculate the total score of ram and shyam 

let sum = 0
<<<<<<< HEAD
let arr7=([...arr,...arr2]).forEach((item) => {
    if(typeof item ==="number")
        sum +=item
    
    
=======
arr.concat(arr2).forEach((item) => {
    if(typeof(item)=== 'number') {
        sum = sum + item
    }
>>>>>>> e1095ca19ca34d706bcfc921fa3a3413297f990e
    // yedi item typeof 'number' ho vaney sum ma add garne
});
console.log(sum)