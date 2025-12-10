
const scores = [45, 78, 92, 33, 88, 56];
const words = ["hello", "hi", "good", "morning", "yes"];

// Q1. Using map, create a new array where each score is increased by 5 (bonus marks)
// Expected output: [50, 83, 97, 38, 93, 61]
const increasedMarks = scores.map((item) => {
return item + 5;
});
console.log(increasedMarks);

// Q2. Using filter, get all scores that are passing (greater than or equal to 50)
// Expected output: [78, 92, 88, 56]
const passed = scores.filter((item) =>
{
    return item >= 50;
});
console.log(passed);

// Q3. Using map, create a new array with the length of each word
// Expected output: [5, 2, 4, 7, 3]
const newArr = words.map((item) =>{
    return item.length;
});
console.log(newArr);

// Q4. Using filter, get all words that contain the letter "o"
// Expected output: ["hello", "good", "morning"]
const arr = words.filter((item) =>{
    if(item.includes("o")){
        return item;
    }    
});
console.log(arr);

// Q5. Using forEach, print each score with message: "Score: XX"
// Example: "Score: 45", "Score: 78", etc.
const messageScore = scores.forEach((item) =>{
 console.log("score"+ ":" + item);
});