const obj = {
  name: "kaylin",
  scores: {
    math: 49,
    science: 40,
    computer: 40,
  },
};

// Q1. // expected output : { math: 49, science: 40, computer: 40 }
console.log(obj.scores);

// Q2. expected output : 6 (calculate the total length of name)
console.log(obj.name.length);

//Q3.  expected output  : [49, 40, 40]
const scoresArr = Object.values(obj.scores);
console.log(scoresArr);

//Q4. expected output: [ 'math', 'science', 'computer' ]
const scoresKeys = Object.keys(obj.scores);
console.log(scoresKeys);

// Q1. Print the total score of all subjects
// Expected Output:129
const total = obj.scores.math + obj.scores.science + obj.scores.computer;
console.log(total);

//Q2. Print the highest score
// Expected Output: 49

// const highest = Math.max(...Object.values(obj.scores));
// console.log(highest);
const arr = Object.values(obj.scores);
const highest = Math.max(...arr);
console.log(highest);

//Q3. Convert the scores object into an array of key–value pairs
//Expected Output: [ ['math', 49], ['science', 40], ['computer', 40] ]
const reqArr = Object.entries(obj.scores);
console.log(reqArr);

//Q4. Check if the key "math" exists in scores
//Expected Output: true
console.log(Object.hasOwn(obj.scores, "math"));

//Q5. Add a new subject "english" with score 45
// Expected Output: { math:49, science:40, computer:40, english:45 }
obj.scores.english = 45;
console.log(obj.scores);

// Q6. Print all subjects where score is 40
// Expected Output: [ 'science', 'computer' ]

const forty = Object.keys(obj.scores).filter((key) => obj.scores[key] === 40);
console.log(forty);

// Q7. Count how many subjects the student has
// Expected Output:4(after adding english)
console.log(Object.keys(obj.scores).length);

//Q8. Convert name into uppercase
// Expected Output:"KAYLIN"
console.log(obj.name.toUpperCase());

// Q9. Check if total score is >= 100
// Expected Output:true

const total1 =
  obj.scores.math +
  obj.scores.science +
  obj.scores.computer +
  obj.scores.english;
console.log(total1 >= 100);

// Q10. Create an array of strings like "math:49", "science:40", "computer:40"
// Expected Output:[ 'math:49', 'science:40', 'computer:40' ]
const pairs = Object.entries(obj.scores).map(
  (key, values) => `${key}:${values}`
);

console.log(pairs);
