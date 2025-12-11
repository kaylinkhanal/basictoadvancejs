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
