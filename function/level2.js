// Q1. write a function that takes in array as input and calculates the length of that array
const calculateArrayLength = (arr) => {
// write your code here
}

console.log(calculateArrayLength([1,2,3,4,5])) // expected output 5


const arrayLength = (numArr) => {
    return numArr.length
}
console.log(arrayLength(['kirankhatri', 'khatri', 'is'])) // Output: 2


//Q2. write a function that takes in array of number as an input and calculates the average
// of the numbers
const calculateAverage = (numArr) => {
    let sum = 0;
    numArr.forEach((item) => {
        sum = sum + item
    });
    return sum / numArr.length;
}

console.log(calculateAverage([10,20,30,40])) // expected output 25

const calculateAvg = (numArray) => {
    let sum = 0;
    numArray.forEach(x => {
        sum += x;
    });
    return sum / numArray.length;
};

console.log(calculateAvg([1, 2, 3, 4, 5])); // Output: 3



//Q3. write a function that takes in an object as an input and returns the total number of keys

const obj = (obj1) => {
    return Object.keys(obj1).length;
};

console.log(obj({ name: 'kiran', age: 20 })); // Output: 2


//Q4. write a function that takes in array as an input and returns the sum of all the numbers
// using forEach loop inside the function 

const sumArray = (numArr) => {
    let sum = 0;
    numArr.forEach(num => {
        sum += num;
    });
    return sum;
};

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15