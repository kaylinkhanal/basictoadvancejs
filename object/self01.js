const obj = {
    name: 'kaylin',
    scores: {
        math: 49,
        science: 40,
        computer: 40
    }
}


// Q1. Get the first character of the name
//  Expected output: 'k'
console.log(obj.name[0])

// Q2. Count total subjects inside scores
//  Expected output: 3
console.log(Object.keys(obj.scores).length)

// Q3. Get the average score
//  Expected output: 43

const scores = Object.values(obj.scores)
console.log(scores.reduce((a,b)=> a+b, 0) / scores.length)

// Q4. Check if math score is less than 50
//  Expected output: true
console.log(obj.scores.math<50)

// Q5. Convert name to uppercase
//  Expected output: "KAYLIN"
console.log(obj.name.toUpperCase())

// Q6. Convert name to lowercase
//  Expected output: "kaylin"
console.log(obj.name.toLowerCase())

// Q7. Check if "science" exists in scores
//  Expected output: true
console.log("science" in obj.scores)

// Q8. List subject names
//  Expected output: ["math", "science", "computer"]
console.log(Object.keys(obj.scores))

// Q9. Multiply math score by 2
// Expected output: 98
console.log(obj.scores.math*2)

// 10. Get last character of the name
//  Expected output: 'n'
console.log(obj.name[obj.name.length - 1])

// Q11. Convert scores object into an array of pairs
// Expected output:
// [["math",49], ["science",40], ["computer",40]]
console.log(Object.entries(obj.scores)) 

// Q12. Check if any score is equal to 40
// Expected output: true
console.log(Object.values(obj.scores).includes(40))

// Q13. Sum all scores
// Expected output: 129
console.log(Object.values(obj.scores).reduce((memo, idx)=> memo + idx,0))

// Q14. Find the highest score
// Expected output: 49
console.log(Math.max(...Object.values(obj.scores)))

// Q15. Find the lowest score
// Expected output: 40
console.log(Math.min(...Object.values(obj.scores)))

// Q16. Convert the name into an array of characters
//  Expected output: ["k","a","y","l","i","n"]
console.log(obj.name.split(''))

// Q17. Replace 'kaylin' with 'arjun'
// Expected output: "arjun"
obj.name = "arjun"
console.log(obj.name)

// Q18. Check if name length is greater than 4
// Expected output: true
console.log(obj.name.length>4)

// Q19. Create a new property: totalScore
// Expected output: 129

const totalscore = Object.values(obj.scores).reduce((memo, idx)=> memo + idx,0)
obj.totalscore = totalscore
console.log(obj)

// Q20. Check if the name starts with "k"
// Expected output: true
console.log(obj.name.startsWith('k'))

