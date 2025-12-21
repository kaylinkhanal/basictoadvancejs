//Q1.   Reverse a string.
let str="typescript"
let reversed=str.split("").reverse().join("");
console.log(reversed)


//Q2.find length of a string.
let length=str.length
console.log(length)

//Q3.write in a uppercase. 
console.log(str.toUpperCase())

//Q4.Check if string contains a word.
console.log(str.includes("script"))

//Q5.Count number of vowels.
let count =0;
for(let char of str){
    if("aeiou".includes(char)){
        count++;
    }
}
console.log(count)