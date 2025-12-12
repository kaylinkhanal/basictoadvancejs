<<<<<<< HEAD
const obj = {
  name: "kaylin",
  scores: {
    math: 49,
    science: 40,
    computer: 40,
  },
};

// Q1. Find the subject with the highest score
// Expected Output: math
const arrScores = Object.values(obj.scores);
const maxScore = Math.max(...arrScores);
// const SubHighest = Object.keys(obj.scores).filter(
//   (key) => obj.scores[key] === maxScore
// );
const SubHighest = Object.keys(obj.scores).find(
  (key) => obj.scores[key] === maxScore
);
console.log(SubHighest);

// Q2. Create a new object that contains only subjects where score ≥ 45
// Expected Output:{ math: 49 }

// Q3. Swap scores: make math = science and science = math
// Expected Output:{ math:40, science:49, computer:40 }

// Q4. Count how many characters in the name are vowels
// Expected Output:2
// ("a" and "i" in kaylin)

// Q5. Convert scores keys into uppercase and return a new object
// Expected Output:{ MATH:49, SCIENCE:40, COMPUTER:40 }

// Q6. Create an array of objects for each subject
// Expected Output:[
//   { subject: 'math', score: 49 },
//   { subject: 'science', score: 40 },
//   { subject: 'computer', score: 40 }
// ]

// Q7. Check if any subject has a score below 40
// Expected Output:false

// Q8. Add 5 bonus marks to every subject (without modifying original object)
// Expected Output:{ math:54, science:45, computer:45 }

// **Q9. Create a string like:"kaylin scored 49 in math, 40 in science, and 40 in computer"**
// Expected Output:"kaylin scored 49 in math, 40 in science, and 40 in computer"

// Q10. Reverse the name property ("kaylin" → "nilyak")
// Expected Output:"nilyak"

// Q11. Convert the whole object to a flat array
// Example Output:["kaylin", "math", 49, "science", 40, "computer", 40]

// Q12. Return only keys whose score is even
// Expected Output:["science", "computer"]

// Q13. Sort the subjects by score (low to high)
// Expected Output:[ ["science", 40], ["computer", 40], ["math", 49] ]

// Q14. Get average score of all subjects
// Expected Output:43(129 ÷ 3)

// Q15. Transform this object into:
// {
//   name: "kaylin",
//   total: 129,
//   percentage: 43,
=======
const generateRandomNumber = () => {
    return Math.random()
}

const obj = {
    level: 3,
    subject: "opt math",
    topics: ["calculus", "statistics", "computer"],
    number:  generateRandomNumber()
}


// Q1, if obj.random is more than 0.5, add +1 to the obj.level else -1 to obj.level


// Q2. return only the topics name starting from letter 'c'
// HINT
const output = obj.topics.filter((item) => {
    // yedi item ko first letter 'c' ho vaney matra return garne
})
console.log(output)

const obj2 = {
    name: 'shiva',
    address: {
        city: 'kathmandu',
        country: 'nepal'
    },
}

// combine obj and obj2 into obj3 

//expected output : 
// {
//     level: 3,
//     subject: "opt math",
//     topics: ["calculus", "statistics", "computer"],
//     number: 0.234567,
//     name: 'shiva',
//     address: {
//         city: 'kathmandu',
//         country: 'nepal'
//     },
>>>>>>> 0527b5e6f446d9b4925b47c8c56fbe46901e36c8
// }
