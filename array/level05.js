const arr = [5,1,4]

// syntax for map 

// const mappedArr = arr.map((item) => {
//     return element * 2
// })
//console.log(mappedArr); // [10, 2, 8]
//--------------------



//Q1. if item is divisible by 2, then multiply it by 3 else multiply it by 2
// expected output: [10, 2, 12]
const mapped = arr.map((item) => {
    if(item % 2 ===0){
        return item * 3;
    } else {
        return item * 2;
    }
});
console.log(mapped);


//Q2. use filter to get only those items which are greater than 2
// expected output: [5,4]
const filtered = arr.filter ((item) => {
    return item > 2;
});
console.log(filtered);

//Q3. Use map() to create a new array where each number in [1, 2, 3, 4, 5] is multiplied by 3.
// expected output: [3, 6, 9, 12, 15]
const mapped1 = [1,2,3,4,5];
const mapped2 = mapped1.map ((item) => {
    return item * 3;
});
console.log(mapped2);

//Q4. Use filter() to get all even numbers from [10, 15, 20, 25, 30].
// expected output: [10, 20, 30]
const filtered1 = [10,15,20,25,30];
const filtered2 = filtered1.filter((item) => {
    
    return item % 2 ===0;
} );
console.log(filtered2);

//Q5. Use forEach() to print each element of ["cat", "dog", "rabbit"] to the console.
const animals = ["cat", "dog", "rabbit"];
const animals2 = animals.forEach((item) =>{
    console.log(item);
});


//Q6. Use filter() to get all names longer than 4 characters from ["Tom", "Jerry", "Spike", "Tyke"].
const names = ["Tom", "Jerry", "Spike", "Tyke"];
const names2 = names.filter((item) => {
    
    return item.length > 4;
    
});
console.log(names2);
