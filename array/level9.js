/***************************
 * Classwork: Array Topic
 ***************************/

const arr = [5,1,2,4]

//Q1. use map to multiply each item by 3 if even and remove the odds ones

const arrMap = arr.map(item => item%2 === 0 ? item * 3 : item ).filter(item => (item % 2 === 0) )
console.log(arrMap);//[ 15, 6, 12 ]

//-----------------------------------------------------------------------

// Q2 use foreach to calculate the sum of all even numbers in the array
let sumEven = 0;
const arrEach = arr.forEach(num => {
    if(num % 2 === 0) {
        sumEven += num;
    }
});
console.log(sumEven);
//Output: 6
//-----------------------------------------------------------------------