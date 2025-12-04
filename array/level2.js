const arr = [3,4,5,6,1]

const arr2 = [6,2,3,1,5]


//Q1.  Output should be [3,4,5,6,1,6,2,3,1,5]
let output = arr.concat(arr2);
console.log(output);


//Q2. output shoulb be [5,1,3,2,6]
let output2 = arr2.reverse();
console.log(output2);

// length of array
let length1 = arr.length;
console.log(length1);

// add one student name and print them in string
let studentName = ["abc" ,"xyz" , "jhon", "alex"];
studentName.push("albert");
console.log(studentName.toString());

//remove the last name 
let studentName1 = ["sagar", "subedi","kkk"];
studentName1.pop();
console.log(studentName1.toString());

//remove the first element
studentName1.shift();
console.log(studentName1);

//add another student at the beggenning
studentName1.unshift('bbbb');
console.log(studentName1);

//find the position of student
console.log(studentName1.indexOf("subedi"));

//check the name sagr is their or not
console.log(studentName1.includes("subedi"));

//arrange the name in alphabetically
console.log(studentName1.sort()); 
//if we use toshorted() it create new array,but keep orginal same


// hw: map vs foreach vs filter  in array