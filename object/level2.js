const obj = {
    name: 'kaylin',
    scores: {
        math: 49,
        science: 40,
        computer: 40
    }
}

// Q1. // expected output : { math: 49, science: 40, computer: 40 }
console.log(obj.scores);


// Q2. expected output : 6 (calculate the total length of name)
console.log(obj.name.length);


//Q3.  expected output  : [49, 40, 40]
const newArr = Object.values(obj.scores);
console.log(newArr);



//Q4. expected output: [ 'math', 'science', 'computer' ]
const newArr2 = Object.keys (obj.scores);
console.log(newArr2);


// Q5. add a new subject "english" with score 45 to the scores object
obj.scores.english = 45;
console.log(obj.scores);


// Q6. update the score of math to 50
obj.scores.math = obj.scores.math+1;
console.log(obj.scores);


// Q7. delete the subject "computer" from the scores object
delete obj.scores.computer;
console.log(obj.scores);


// Q8. check if the subject "science" exists in the scores object
if("science" in obj.scores){
    console.log("science exists");
} else {
    console.log("no such subject");
}
