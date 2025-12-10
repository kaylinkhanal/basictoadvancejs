// JavaScript Practice Set

// 1 – Sum of Negative Numbers
// Q1. Given an array of numbers, calculate the sum of all negative values.
// Example Input: [-3, 5, -7, 10, -2]
// Expected Output: -12

const numbers = [-3, 5, -7, 10, -2];
const sumOfNegatives = numbers.reduce((container, nextID) => {
    return nextID < 0 ?container + nextID :container;
}, 0);
console.log(sumOfNegatives); // Output: -12

// -------------------------------------------------------
// 2 – Count Even Numbers
// Q2. Given an array of numbers, count how many even numbers exist.
// Example Input: [1, 2, 4, 7, 10]
// Expected Output: 3

const nums = [1, 2, 4, 7, 10];
const countEvens = nums.reduce((count, num) => {
    return num % 2 === 0 ? count + 1 : count;
}, 0);
console.log(countEvens); // Output: 3
// -------------------------------------------------------
// 3 – Character Frequency in a String
// Q3. Given a string, count how many times each character appears.
// Use: split() and reduce()
// Example Input: "hello"
// Expected Output: { h:1, e:1, l:2, o:1 }

const str = "hello";
const charFrequency = str.split('').reduce((freq, char) => {
    freq[char] = (freq[char] || 0) + 1;
    return freq;
}, {});
console.log(charFrequency); // Output: { h: 1, e: 1, l: 2, o: 1 }
// -------------------------------------------------------
// 4 – Flatten a 2D Array
// Q4. Flatten a 2D array into a single array using reduce.
// Example Input: [[1,2],[3,4],[5]]
// Expected Output: [1,2,3,4,5]

const array2D = [[1,2],[3,4],[5]];
const flattenedArray = array2D.reduce((flat, next) => flat.concat(next), []);
console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]
// -------------------------------------------------------
// 5 – Maximum Number Using Reduce
// Q5. Find the maximum number in an array using reduce.
// Example Input: [3, 9, 1, 20, 7]
// Expected Output: 20

const numArray = [3, 9, 1, 20, 7];
const maxNumber = numArray.reduce((max, current) => (current > max ? current : max), numArray[0]);
console.log(maxNumber); // Output: 20

// -------------------------------------------------------
// 6 – Sort + Sum of First 3 Elements
// Q6. Sort an array of numbers in ascending order and then calculate the sum of the first 3 elements using reduce.
// Example Input: [9, 1, 4, 7, 2]
// Expected Output: 1 + 2 + 4 = 7

const arrNums = [9, 1, 4, 7, 2];
arrNums.sort((a, b) => a - b);
const sumFirstThree = arrNums.slice(0, 3).reduce((sum, num) => sum + num, 0);
console.log(sumFirstThree); // Output: 7
// -------------------------------------------------------
// 7 – Group Words by First Letter
// Q7. Given an array of words, group them by their first letter into an object using reduce.
// Example Input: ["apple", "ball", "bat", "cat"]
// Expected Output: { a:["apple"], b:["ball","bat"], c:["cat"] }

const words = ["apple", "ball", "bat", "cat"];
const groupedWords = words.reduce((grouped, word) => {
    const firstLetter = word[0];
    if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
    }  
    grouped[firstLetter].push(word);
    return grouped;
}, {});
console.log(groupedWords); 
// Output: { a: [ 'apple' ], b: [ 'ball', 'bat' ], c: [ 'cat' ] }
//-------------------------------------------------------
// 8 – Reverse Order of Words
// Q8. Given a string of words separated by spaces, reverse the order of the words.
// Use: split(), reverse(), join()
// Example Input: "I love coding"
// Expected Output: "coding love I"

const sentence = "I love coding";
const reversedSentence = sentence.split(' ').reverse().join(' ');
console.log(reversedSentence); // Output: "coding love I"
// -------------------------------------------------------
// 9 – Remove Duplicates Using Reduce
// Q9. Remove duplicates from an array of numbers using reduce.
// Example Input: [1, 2, 2, 3, 4, 4, 5]
// Expected Output: [1, 2, 3, 4, 5]

const numsWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueNums = numsWithDuplicates.reduce((unique, num) => {
    if (!unique.includes(num)) {
        unique.push(num);
    }
    return unique;
}, []);
console.log(uniqueNums); // Output: [1, 2, 3, 4, 5]
// -------------------------------------------------------
// 10 – Word Frequency
// Q10. Count the frequency of each word in a sentence.
// Use: split() + reduce()
// Example Input: "cat dog cat lion dog"
// Expected Output: { cat: 2, dog: 2, lion: 1 }
const sentence2 = ["cat", "dog", "cat", "lion", "dog"];
const wordFrequency = sentence2.reduce((freq, word) => {
    freq[word] = (freq[word] || 0) + 1;
    return freq;
}, {});
console.log(wordFrequency); // Output: { cat: 2, dog: 2, lion: 1 }
// -------------------------------------------------------