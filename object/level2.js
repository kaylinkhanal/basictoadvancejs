const obj = {
    name: 'kaylin',
    scores: {
        math: 49,
        science: 40,
        computer: 40
    }
}

// Q1. // expected output : { math: 49, science: 40, computer: 40 }

const output = obj.scores
console.log(output)

// Q2. expected output : 6 (calculate the total length of name)

const totalLenght = obj.name.length
console.log(totalLenght)

//Q3.  expected output  : [49, 40, 40]

const output2 = Object.values(obj.scores)
// const output2 = [obj.scores.math,obj.scores.science,obj.scores.computer]
console.log(output2)


//Q4. expected output: [ 'math', 'science', 'computer' ]

const output3 =   Object.keys(obj.scores)
console.log(output3)