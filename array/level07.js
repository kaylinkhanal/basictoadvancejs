
const values = [3, 8, 12, 7, 15, 6];
const names = ["alex", "john", "mary", "tom"];

// Q1. Use map to double all even numbers and triple all odd numbers
// Expected output: [9, 16, 24, 21, 45, 12]
const arr = values.map((item) =>{
    if(item %2 ===0){
        return item * 2;
    }else{
        return item * 3;
    }
});
console.log(arr);

// Q2. Use filter to get only numbers less than 10
// Expected output: [3, 8, 7, 6]
const lessThan = values.filter((item) =>{
    if(item < 10){
        return item;
    }
   //or
    //return item < 10;
});
console.log(lessThan);

// Q3. Use forEach to calculate the sum of all numbers divisible by 3
// Print the sum
let sum = 0;

values.forEach((item) => {
    if (item % 3 === 0) {
        sum = item + sum;
    }
});

console.log(sum);


// Q4. Use map to create a new array with names in uppercase.
// Expected output: ["ALEX", "JOHN", "MARY", "TOM"]
const capital = names.map((item) => {
    return item.toUpperCase();

});
console.log(capital);

// Q5. Use filter followed by map: first get names longer than 3 letters, then convert them to uppercase
// Expected output: ["ALEX", "JOHN", "MARY"]
const twoarr = names.filter((item) => {
    return item.length > 3;
}).map((item) => {
    return item.toUpperCase();
});
console.log(twoarr);