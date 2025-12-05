
   const arr = [3,4,5,6,1]

    let arr2 = ["orange","flower","banana","apple"]

// Q1.

// Given an array of numbers, return a new array where every number is replaced with the sum of all other numbers except itself.
   const sum = arr.reduce((acc, val) => acc + val, 0);
   const result = arr.map(num => sum - num);
   console.log(result);
  
// Q2.

// Given an array of strings, return a new array where strings are sorted first by vowel count, then by length, then alphabetically.


    function countVowels(arr2) {
        return (arr2.match(/[aeiou]/gi) || []).length;
    }
     arr2.sort((a, b) => {
        const vowelDiff = countVowels(a) - countVowels(b);
        if (vowelDiff !== 0) return vowelDiff;
        if (a.length !== b.length) return a.length - b.length;
        return a.localeCompare(b);
    });
    console.log(arr2);

//Q5. Replace the 2nd element in Ram’s array with 100

ramScore[1] = 100;
console.log(ramScore);

//Q6. Check if 99 exists in Shyam’s array

console.log(shyamScore.includes(99));

//Q7. Print the highest score from Ram’s array

console.log(Math.max(...ramScore)); 

//Q8. Reverse Shyam’s array

shyamScore.reverse();
console.log(shyamScore);