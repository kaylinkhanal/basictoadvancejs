// Write a function that flattens a nested array (e.g., [1, [2, [3]]] → [1,2,3]).

const flattern = (arr) => {
  return arr.flat(1)

}
console.log(flattern([1, [2, [3]]]))

// Write a function that sorts an array of numbers without using .sort().

const sortingArray = (arr) => {
  let result = [...arr]; // copy array

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        // swap
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
};

console.log(sortingArray([1, 2, 3, 6, 5, 9, 8, 7]));


// Write a function that finds the longest word in a string.

const findLongestString = (string) => {
  const words = string.split(" ")   // step 1
  let longestWord = words[0]        // step 2

  for (let i = 1; i < words.length; i++) {   // step 3
    if (words[i].length > longestWord.length) {
      longestWord = words[i]        // step 4
    }
  }

  return longestWord
}

console.log(findLongestString('kiran khatri bhumbikramsilwal'))


// Write a function that counts vowels in a string.

const countVowels = (string1) => {
  let count = 0
  const stringss = string1.split('')
  for (i = 0; i <= stringss.length; i++) {
    if (stringss[i] === 'a' || stringss[i] === 'e' || stringss[i] === 'i' || stringss[i] === 'o' || stringss[i] === 'u') {
      count++
    }
  }
  return count
}
console.log(countVowels('kiran khatri bhumbikramsilwal'))

// Write a function that returns the Fibonacci sequence up to n terms.
// F(n) = F(n−1) + F(n−2)

const fibonacciSeries = (n) => {
  let result = [0, 1];

  for (i = 2; i <= n; i++) {

    result.push(result[i - 1] + result[i - 2])
  }
  return result
}
console.log(fibonacciSeries(7))



// Write a function that finds the intersection of two arrays.

const intersactionOfArrays = (arr2, arr3) => {
  let i = 0
  let j = 0
  const res = []
  for (i = 0; i < arr2.length; i++) {
    for (j = 0; j < arr3.length; j++) {
      if (arr2[i] === arr3[j] && !res.includes(arr2[i])) {
        res.push(arr2[i]);
      }
    }
  } return res
}
console.log(intersactionOfArrays([3, 4, 5, 5, 6], [5, 7, 8, 9, 3]))

// Write a function that capitalizes the first letter of every word in a sentence.


const capitalizeFirstIndex = (stringg) => {
  return stringg
    .split(" ")
    .map(word => {
      if (word.length === 0) return word;
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(" ");
};

console.log(
  capitalizeFirstIndex(
    "kiran is nice boy. he is going through a lot of problems . so help him"
  )
);

// Write a recursive function that calculates the sum of digits of a number.

const sumOfDigit = (number) => {
  if (number === 0) {
    return 0; // base case
  }

  return (number % 10) + sumOfDigit(Math.floor(number / 10));
};

console.log(sumOfDigit(234));

// sumOfDigit(234)
// → 4 + sumOfDigit(23)
// sumOfDigit(23)
// → 3 + sumOfDigit(2)
// sumOfDigit(2)
// → 2 + sumOfDigit(0)
// sumOfDigit(0)
// → 0



// Write a function that checks if two strings are anagrams.

const functionCheckAnagram = (string1,string2)=>{
let str1 = string1.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
let str2 = string2.replace(/\s+/g, '').toLowerCase().split('').sort().join('');

 if(str1.length !== str2.length){
  return console.log("string are not anagram")
 } else return str1===str2;
}
console.log(functionCheckAnagram('k    I  r    An','NAr  ik'))

// Write a function that removes duplicates from an array using Set.

const removeDuplicate =(data)=>{
resulttt = [...new Set(data)].join('')
return resulttt
}
console.log(removeDuplicate('kiran kiran kiran'))