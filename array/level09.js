const arr = [5,1,2,4]

//Q1. use map to multiply each item by 3 if even and remove the odds ones

const output = arr.map((item) => {

    if (item % 2 ===0) {
        return item *3;
    }


}).filter((item) => {
    
    return item;
});
console.log(output);


// Q2 use foreach to calculate the sum of all even numbers in the array

let sum =0;
arr.forEach((item) => {
    if (item % 2 ===0) {
        sum += item;
    }
});
console.log(sum);


// Q3 use filter to create a new array which contains only odd numbers from the array
const newarr = arr.filter((item) => {
  if(item %2 !==0)
    return item;
});
console.log(newarr);


// Q4 use map to create a new array which contains each number plus its index
arr.map((value, index) => {
  console.log(index,value);
});



// Q5 use foreach to print each item with its index in the format "index: item"
arr.forEach((value, index) => {
  console.log(index + ":" + value);
});


// Q6 use filter to create a new array which contains numbers greater than 2
const smallerNumber = arr.filter((item) => {
if (item <= 2){
    return item;
}
});
console.log(smallerNumber);


// Q7 use map to create a new array which contains square of each number
const square = arr.map((item) => {
    return item ** 2;
});
console.log(square);


// Q8 use foreach to calculate the product of all numbers in the array
let product =1;      // initial value 1 because multiplying with 1 will not change the result
arr.forEach((item) => {
 product *= item;
});
console.log(product);



