const students = [
  { id: 1, name: 'Alice', grade: 'A', score: 92, major: 'CS' },
  { id: 2, name: 'Bob', grade: 'B', score: 85, major: 'Math' },
  { id: 3, name: 'Charlie', grade: 'A', score: 98, major: 'CS' },
  { id: 4, name: 'David', grade: 'C', score: 74, major: 'Physics' }
];
// Print a statement for each student saying: "Hello, my name is [Name] and I am a [Major] major."
 students.forEach(s =>
  console.log(`Hello, my name is ${s.name} and I am a ${s.major} major.`)
);

//Create a new array containing just the name of each student.
const arr = students.map((s) =>{
  return s.name
});
console.log(arr);

//Find all students who have a score greater than 80.
let stu = Object.values(students(scores))
const scores = stu.filter((s) => {
  if(s > 80){
    return s
  }
});
console.log(scores);

//Calculate the total sum of all student scores
let sum = 0
const sum1 = students.reduce((s,value) =>{
  sum = s + value.score
});
console.log(sum);