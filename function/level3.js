//1. Write a function that reverses an array without using .reverse().

const reverseArry = (revArr) => {
  result = []
  for (let i = revArr.length - 1; i >= 0; i--) {
    result.push(revArr[i])
  }
  return result
}
console.log(reverseArry([1, 2, 3, 4, 5]))

//2. Write a function that finds the maximum number in an array.

const maximumNumber = (maxNum) => Math.max(...maxNum)
console.log(maximumNumber([1, 2, 3, 4, 5, 6]))

//3. Write a function that counts how many times a specific element appears in an array.

const countAllElements = (arr) => {
  let counts = {}; // This object will store our results like { "3": 4, "4": 9 }

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];

    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  }
  for (let key in counts) {
    console.log(`${key} appears ${counts[key]} times`);
  }
};
countAllElements([2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4]);


//4. Write a function that merges two arrays and removes duplicates.

const mergeTwoArray = (x, y) => {
  const combined = [...x, ...y]
  return [...new Set(combined)]
}
console.log(mergeTwoArray([1, 2, 3, 4, 5], [1, 3, 4, 6, 7]))

//5. Write a function that checks if a string is a palindrome.

const checkPalimdrome = (string) => {
  const reversed = string.split('').reverse().join('')
  return reversed === string;

}
console.log(checkPalimdrome('kiranarik'))
console.log(checkPalimdrome("iamkiran"))

//6. Write a function that returns the factorial of a number.

const factOfNumber = (number) => {
  let fact = 1;

  for (i = 1; i <= number; i++) {
    fact = fact * i;
  }
  return fact;

}
console.log(factOfNumber(5))

//7. Write a function that finds the second largest number in an array.

const secondLargest = (a) => {
  a.sort((s, d) => (d - s))
  return a[1]
}
console.log(secondLargest([1, 8, 9, 3, 4, 5]))


//8. Write a function that converts an array of strings to uppercase.

const toUppercaseString = (b) => {
  if (typeof b !== 'string') {
    return console.log(`please enter valid sttring`);
  }

  return b.toUpperCase();
}
console.log(toUppercaseString(`hey i am kiran khatri `))


//9. Write a function that takes an object and returns an array of its values.

const returnValueArray = (c) => {
  return Object.entries(c).flat(1)
}
console.log(returnValueArray({ Name: 'kiran', Age: 20, Level: 'Bachelor' }))

//10. Write a rfunction that removes all falsy values (false, 0, "", null, undefined, NaN) from an array.

const rfunction = (arr) => {
  let result = [];

  for (let value of arr) {
    if (!value) {
      console.log(`Falsy value detected: ${value} → removed successfully`);
    } else {
      result.push(value);
    }
  }

  return result;
};

console.log(
  rfunction([false, 0, "", null, undefined, NaN, 25, "kiran", true])
);
