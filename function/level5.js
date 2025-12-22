// Write a function that finds the majority element in an array (element that appears more than n/2 times).

const findMajorityElement = (array) => {

    if (array.length === 0) return null;
    const threshold = array.length / 2;
    const countArray = {};

    for (const item of array) {
        countArray[item] = (countArray[item] || 0) + 1;
        if (countArray[item] >= threshold) {
            return item;
        }
    } return null;
}
console.log(findMajorityElement(['kiran', 'kiran', 'kiran', 'hari', 'sundar', 'kismat']))

// Write a function that rotates an array by k positions.

const rotates = (array2, n) => {
    const newArry = []
    n = n % array2.length;
    for (let i = 0; i < array2.length; i++) {


        newArry.push(array2[(i + n) % array2.length]);

    }
    return newArry;
}
console.log(rotates(['kiran', 'khatri', 'bhum', 'silwal', 'bikram'], 1))

// Write a function that finds the missing number in an array of 1...n.

const findMissingNumbers = (numbers) => {
    const n = numbers.length + 1;
    const numberSet = new Set(numbers);
    const missing = [];

    for (let i = 1; i <= n; i++) {
        if (!numberSet.has(i)) {
            missing.push(i);
        }
    }

    return missing;
}
console.log(findMissingNumbers([1, 3, 4, 5, 7, 9, 10]))

// Write a function that implements binary search on a sorted array.

const Implement = (array3, n) => {
    let sortedArray = array3.sort((a, b) => a - b);
    let left = 0;
    let right = sortedArray.length - 1;

    while (left <= right) {
        let middlePoint = Math.floor((left + right) / 2);

        if (n === sortedArray[middlePoint]) {
            return middlePoint; // ← Fixed: return index, use 'n'
        }

        if (sortedArray[middlePoint] < n) {
            left = middlePoint + 1; // Search right
        } else {
            right = middlePoint - 1; // Search left
        }
    }

    return -1; // Not found
}

console.log(Implement([5, 4, 6, 7, 8, 9, 3, 2, 1], 7));
// Output: 5 (7 is at index 5 in sorted array)

// Write a function that finds all prime numbers up to n.

const findPrimeNumbers = (number1) => {
    let result = [1]
    const isPrime = (num) => {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false; //even numbers aren't prime number 
        // check for odd number divisor i=3 , we have checked up to 2 , and it check up to the number square 
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        } return true;
    }
    for (let num = 2; num < number1; num++) {
        if (isPrime(num)) {
            result.push(num);
        }
    } return result;
}
console.log(findPrimeNumbers(30))

// Write a function that checks if a string has balanced parentheses.

const checkParenthesis = (string) => {

    let count = 0
    for (const char of string) {
        if (char === ('(')) count++;
        if (char === (')')) count--;
        if (count < 0) return false //more closes than open 
    } return count === 0 //all open's are closed 
}
console.log(checkParenthesis('hey this is (kiran khatri (and i am from nepal udayapur) district'))

// Write a function that groups an array of objects by a property (e.g., group by age).

const groupByProperties = (arrayz) => {

    // const result = {}
    // for (const person of arrayz) {
    //     result[person.age] = []
    //     result[person.age].push(person)
    // }
    // return result

    return arrayz.reduce((acc, item) => {
        if (!acc[item.age]) {
            acc[item.age] = [];
        }
        acc[item.age].push(item);
        return acc;
    }, {});
}
console.log(groupByProperties([
    { fname: 'kiran', lname: 'khatri', age: 20 },
    { fname: 'Bhum', lname: 'khatri', age: 30 }
]))

// Write a function that finds the longest substring without repeating characters.

// Write a function that calculates the power of a number using recursion.

// Write a function that merges two sorted arrays into one sorted array.