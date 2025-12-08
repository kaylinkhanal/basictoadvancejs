/***************************
 * Classwork: Array Topic
 ***************************/
const arr = [5,1,2,4]
//Q1. Use map to triple each even number and remove the odd numbers.

const arrMapped = arr.map(item => item % 2 === 0? item * 3 : item).filter(item => item % 2 === 0);
console.log(arrMapped);
//[ 6, 12 ]

//-----------------------------------------------------------------------

// Q2 use foreach to calculate the sum of all even numbers in the array
let sumofEven = 0
const arrFilter = arr.forEach(item => item%2 === 0? sumofEven += item: null )
console.log(sumofEven);
//Output: 6
//-----------------------------------------------------------------------