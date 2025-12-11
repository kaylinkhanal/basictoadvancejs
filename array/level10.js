const arr = ['ram',90,70, 50]
const arr2 = ['shyam', 99,88,35]

// Q1. create an array which contains names of students only

// hint use typeof operator
const names = arr.concat(arr2).filter((item) => {
<<<<<<< HEAD
    
    if(typeof item === 'string'){
        return item;
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
    if(typeof item === 'number'){
        sum+= item;
=======
    if(typeof(item)=== 'number') {
        sum = sum + item
>>>>>>> e1095ca19ca34d706bcfc921fa3a3413297f990e
    }
    // yedi item typeof 'number' ho vaney sum ma add garne
});
console.log(sum);

//Q3. create an array which contains scores greater than 80
const highScores = arr.concat(arr2).filter((item) => {
    if (item > 80){
        return item;
    }
});
console.log(highScores);

// Q4. create an array which contains the length of each name
const arr3 =['yogesh', 'sujan', 'anil'];
const name = arr3.map((item) =>{
    return (item.length);
});
console.log(name);

// Q5. print each name with its length in the format "name: length"
arr3.forEach((item, length)=>{
console.log(item + ":" + item.length);

});

// Q6. create an array which contains names in uppercase
const upper = ['yogesh', 'sujan', 'anil'];
const newUpper = upper.map((item) => {
return item.toUpperCase();
});
console.log(newUpper);







