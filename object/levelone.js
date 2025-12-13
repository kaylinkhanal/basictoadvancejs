const student = {
student1 : {name: "Sagar",rollNo: 1,section: "A",class: 12,address: "Kathmandu"},
student2 : { name: "Ram", rollNo: 2, section: "B", class: 11, address: "Pokhara"},
student3 : {name: "Shyam",rollNo: 3,section: "A",class: 12,address: "Chitwan"},
student4 : {name: "Shya",rollNo: 4,section: "B",class: 13,address: "lalitipur"}
};

//print the name of student3
console.log(student.student3.name);

//get the section of student 3
console.log(student.student1.section);

//change the class of student3 to 10
student.student3.class = 10 ;//to update the value 
console.log(student.student3.class);

//add anew property age to student 2
student.student2.age = 13 ; //to add anew value 
console.log(student.student2);

//delete the section of student4
delete student.student4.section //to delete the value
console.log(student.student4);

//print all key of student1
console.log(Object.keys(student.student1)); //to find the key

//print all the value of student 1//to find the value
console.log(Object.values(student.student1));

//check if rollNo exist in student3
console.log("rollNo" in student.student3);//'in" operator is used to checks if a property exists anywhere in the object

//count totalnumber of student
console.log(Object.keys(student).length);//it count the studnet 
