// math, science, opt math, opt comp

const obj = {
    level: 1,
    subject: "math",
    topics: ["algebra", "geometry", "trigonometry"],
}

// Q1. output should be trigonometry
console.log(obj.topics[2]);


//Q2. output should be 3 (number of topics)
console.log(obj.topics.length);


//Q3. add one level to the current level in the object
//expected output : level: 2
console.log(obj.level+1);


 // ---> write your code here
// console.log(obj.level)



//Q4. delete subject from the object
delete obj.subject;
console.log(obj);


//Q5. add new property "difficulty" with value "easy" to the object
obj.Difficulty = "easy";
console.log(obj);


//Q6. check if the property "topics" exists in the object
// expected output: topics exists
if("topics" in obj){
    console.log("topics exists");
} else{
    console.log("failed to find");
}


//Q7. loop through the topics and print each topic to the console
obj.topics.forEach((item) => {
console.log(item);
});


//Q8. create a new array which contains the length of each topic
const newArr = obj.topics.map((item) => {
console.log(item.length);
});


//Q9. create a new array which contains topics in uppercase
const upper = obj.topics.map((subjects) => {
console.log(subjects.toUpperCase());
});


//Q10. use filter to create a new array which contains topics having length greater than 7
const filteres = obj.topics.filter((subject) => {
if (subject.length > 7){
    return subject;
}
});
console.log(filteres);























