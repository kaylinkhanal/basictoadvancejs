const arr = ['ram',90,70, 50]
const arr2 = ['shyam', 99,88,35]

// Q1. create an array which contains names of students only

// hint use typeof operator
// yedi item to typeof 'string' ho vaney matra return garne
const names = arr.concat(arr2).filter((item) => {
    if (typeof item =="string")
    return true;
});
console.log(names);


// Q2. calculate the total score of ram and shyam 

let sum = 0
arr.concat(arr2).forEach((item) => {
    // yedi item typeof 'number' ho vaney sum ma add garne
    if (typeof item =="number"){
         sum=sum+item;
    }
        return sum
});
console.log(sum)