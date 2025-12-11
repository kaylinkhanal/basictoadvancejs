const arr = ["ram", 90, 70, 50];
const arr2 = ["shyam", 99, 88, 35];

// Q1. create an array which contains names of students only
const combineName = [...arr, ...arr2].filter(
  (item) => typeof item === "string"
);
console.log(combineName);

// hint use typeof operator
<<<<<<< HEAD
const stringOnly = arr.concat(arr2).filter((item) => {
  // yedi item to typeof 'string' ho vaney matra return garne
  if (typeof item === "string") {
    return item;
  }
});
console.log(stringOnly);

// Q2. calculate the total score of ram and shyam

let sum = [...arr, ...arr2].forEach((item) => {
  // yedi item typeof 'number' ho vaney sum ma add garne
  if (typeof item === "number") {
    sum = sum + item;
  }
=======
const names = arr.concat(arr2).filter((item) => {
    if(typeof(item)=== 'string') {
        return item
    }
    // yedi item to typeof 'string' ho vaney matra return garne
});
console.log(names)

// Q2. calculate the total score of ram and shyam 

let sum = 0
arr.concat(arr2).forEach((item) => {
    if(typeof(item)=== 'number') {
        sum = sum + item
    }
    // yedi item typeof 'number' ho vaney sum ma add garne
>>>>>>> e1095ca19ca34d706bcfc921fa3a3413297f990e
});
console.log(sum);
