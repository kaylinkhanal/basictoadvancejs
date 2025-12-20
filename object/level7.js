
// JavaScript Object Questions
//Assignment 
// 1. Creating and Accessing Objects
// Create an object `person` with properties `name`, `age`, and `city`. 
// Print the `name` and `city` of the person.
const person = {
    name: "Ashwin",
    age: 23,
    city: "Naya Thimi",
}
console.log(person.name);//'Ashwin'
console.log(person.city);//'Naya Thimi'
// 2. Adding and Updating Properties
// Given an object `car = {brand: 'Toyota', model: 'Corolla'}`
// Add a new property `year` with value 2020, and update `model` to 'Camry'.
const car = {
    brand: 'Toyota',
    model: 'Corolla',
}
car["year"] = 2020;
console.log(car);//{brand: 'Toyota', model: 'Corolla', year: 2020}
car.model = 'Camry'
console.log(car);//{brand: 'Toyota', model: 'Camry', year: 2020}

// 3. Looping through Object Properties
// Write a loop to print all keys and values of the object `student = {id: 101, name: 'Alice', grade: 'A'}`
const student = {
    id: 101,
    name: 'Alice',
    grade: 'A'
}
for (const key in student) {
    console.log(`${key} belongs to ${student[key]}`)

}
// 4. Deleting Properties
// Given `book = {title: 'JS Guide', author: 'John', pages: 300}`
// Delete the property `pages` from the object.
book = {
    title: 'JS Guide',
    author: 'John',
    pages: 300,
}
delete book.pages
console.log(book)
// 5. Nested Objects
// Create an object `company` with properties `name`, `location`, and `employee`.
// `employee` should be another object with `id` and `name`. 
// Print the employee's name.

const company = {
    name: "OpenAI",
    location: "California",
    employee: {
        id: 2034,
        name: "Bob",
    }
}
console.log(company.employee.name);

