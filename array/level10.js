const arr = ['ram',90,70, 50]
const arr2 = ['shyam', 99,88,35]

// Q1. create an array which contains names of students only

// hint use typeof operator
const names = arr.concat(arr2).filter((item) => {
<<<<<<< HEAD
    if(typeof item =="string"){

return item
    }
    
    // yedi item to typeof 'string' ho vaney matra return garne
});
console.log(names);

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
arr.concat(arr2).forEach((item) => {
<<<<<<< HEAD
    if(typeof item=="number"){
        sum=sum+item;
    }
    return sum
     // yedi item typeof 'number' ho vaney sum ma add garne
 });
 console.log(sum)
=======
    if(typeof(item)=== 'number') {
        sum = sum + item
    }
    // yedi item typeof 'number' ho vaney sum ma add garne
});
console.log(sum)
>>>>>>> e1095ca19ca34d706bcfc921fa3a3413297f990e
