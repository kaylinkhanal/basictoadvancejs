const arr = ['ram',90,70, 50]
const arr2 = ['shyam', 99,88,35]

// Q1. create an array which contains names of students only

// hint use typeof operator
const names = arr.concat(arr2).filter((item1) => {
    if(typeof item1 === 'string'){
        return item1
    }
    // yedi item to typeof 'string' ho vaney matra return garne
});
console.log(names)


// Q2. calculate the total score of ram and shyam 

let sum = 0;
([...arr,...arr2]).forEach((item) => {
    if(typeof item === 'number'){
        sum = item + sum
    }
    // yedi item typeof 'number' ho vaney sum ma add garne
});
console.log(sum)