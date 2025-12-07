const arr = [3,4,5,6,1]
const arr2 = [6,2,3,1,5]


//Q1.  Output should be [3,4,5,6,1,6,2,3,1,5]
console.log(...arr, ...arr2)

//Q2. output shoulb be [5,1,3,2,6]
let newArr = arr2.reverse();
console.log(newArr)

//Q2. output shoulb be [5,1,3,2,6]
const reversed=arr2.reverse()
console.log(reversed)


// hw: map vs foreach vs filter  in array



