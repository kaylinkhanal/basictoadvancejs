//Q1.Create an object called person with name, age, and city. Print the object.
const person={
    name:'bishmeeta thapa',
    age:23,
    city:'Kathmandu'
}
console.log(person)

//Q2. Access the value of name from the person object.
console.log(person.name)




//Q3. Change the age value inside the person object.
person.age=20
console.log(person.age)


//Q4. Add a new key country to the person object.
person.country='Nepal'
console.log(person)

//Q5. Delete the key city from the object.
delete person.city
console.log (person)


//Q6. Create an object marks with math, science, English marks. Print math marks only
const marks={
    math:40,
    science:65,
    english:88
}
console.log(marks)


//Q7. Check the length of the string inside an object key.
console.log(person.name.length)


//Q8. Use Object.keys() to get all keys of an object.
//const keys=Object.keys(marks)
//console.log(keys)
console.log(Object.keys(marks))

//Q9. Use Object.values() to get all values of an object.
console.log(Object.values(marks))