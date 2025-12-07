// ===============================
// JAVASCRIPT PRACTICE QUESTIONS
// map, filter, reduce, loops
// Easy → Medium → Hard
// ===============================

// -------------------------------
// 🟢 EASY LEVEL
// -------------------------------

// 1. Use map to double each number in [1, 2, 3, 4]

const num1 = [1, 2, 3, 4]
const num1Doubled = num1.map(num=>num*2);
console.log(num1Doubled);//[ 2, 4, 6, 8 ]


// 2. Use forEach to print numbers in [5, 10, 15]
const num2 = [5, 10, 15]
const num2Print = num2.forEach(num=>console.log(num))
console.log(num2Print)//5,10,15,undefined

// 3. Use filter to return only even numbers from [1, 2, 3, 4, 5, 6]
const num3 = [1, 2, 3, 4, 5, 6]
const evenNum3 = num3.filter(num=>(num%2===0))
console.log(evenNum3);//[ 2, 4, 6 ]
// 4. Use a for loop to print numbers 1 to 10
for (i=0; i<=10; ++i){
    console.log(i)
}//1,2,3,4,5,6,7,8,9,10
// 5. Use a while loop to count backwards 5 to 1
let x = 5;
while(x>=1){
    console.log(x);
    x--;
}//5,4,3,2,1

// 6. Use a do…while loop to print 1 to 3
let a = 3;
do{
    console.log(a);
    a--;
}while(a>=1)
//3,2,1
// 7. Use reduce to find sum of [10, 20, 30]
const num4 = [10, 20, 30]
const sumNum4 = num4.reduce((a,b)=>a+b,0)
console.log(sumNum4);
//60
// 8. Use map to uppercase ["a", "b", "c"]
const alpha = ["a", "b", "c"]
const Uppercase = alpha.map(letter=>letter.toUpperCase())
console.log(Uppercase);
//[ 'A', 'B', 'C' ]

// 9. Use filter to remove negative numbers from [4, -1, 3, -5, 2]
const num5 = [4, -1, 3, -5, 2]
const positiveNum5 = num5.filter(num=>(num>0))
console.log(positiveNum5);//[ 4, 3, 2 ]

// 10. Use reduce to find max and min in [8, 3, 14, 2, 7]
const num6 = [8, 3, 14, 2, 7]
const maxNum6 = num6.reduce((a,b)=>{return(Math.max(a,b))})
console.log(maxNum6);//14

const minNum6 = num6.reduce((a,b)=>Math.min(a,b))
console.log(minNum6);//2
// -------------------------------
// 🟡 MEDIUM LEVEL
// -------------------------------

// 11. Filter people age >= 18 from:
// [ {name:"A", age:20}, {name:"B", age:17}, {name:"C", age:25} ]

// 12. Map the same array to only names

// 13. Reduce [1,2,3,4] to product

// 14. For loop printing even numbers 1–20

// 15. While loop adding numbers until total > 50

// 16. do…while loop until input = 5 (assume input())

// 17. Map [1,2,3] → ["1 ₹", "2 ₹", "3 ₹"]

// 18. Filter strings shorter than 4 chars in ["apple","car","banana","dog"]

// 19. Reduce [[1,2],[3,4],[5]] → [1,2,3,4,5]

// 20. forEach: square numbers and push to new array


// -------------------------------
// 🔴 HARD LEVEL (Interview-style)
// -------------------------------

// 21. Filter only numbers from [1, "hello", 3, true, 5, "hi"] then map → triple them
// Expected: [3, 9, 15]

// 22. Reduce ["a","b","c","d"] into "abcd"

// 23. Reduce to compute average score of:
// [ {name:"Ram",score:80}, {name:"Shyam",score:50}, {name:"Hari",score:90} ]

// 24. For loop to find FIRST number > 50 in [10,25,49,51,60]

// 25. While loop multiplying number by 2 until > 1000

// 26. Filter + map emails from:
// [ {user:"A",email:null}, {user:"B",email:"b@mail.com"}, {user:"C",email:"c@mail.com"} ]

// 27. Reduce frequency count of ["a","b","a","c","b","a"]
// Expected: {a:3, b:2, c:1}

// 28. Reduce vote count from ["yes","no","yes","yes","no","yes"]

// 29. map + filter + reduce total price of items > 500:
// [ {name:"Laptop",price:800}, {name:"Mouse",price:50}, {name:"Phone",price:700} ]

// 30. For loop to print pyramid:
// *
// **
// ***
// ****
// *****
console.log("Hi there!");
console.log("I am excited to talk to you.");
let bot;
bot = "teacherBot";

let botLocation = "the universe";

console.log("Allow me to introduce myself.");

const botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction);

const botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence);

bot = "professorBot";

const nicknameIntroduction = "My nickname is " + bot + ".";
console.log(nicknameIntroduction);

bot = "awesomeTeacherBot";

const newNicknameGreeting = "I love my nickname but I wish people would call me " + bot + ".";
console.log(newNicknameGreeting);

const favoriteSubject = "Computer Science";

const favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";
console.log(favoriteSubjectSentence);

