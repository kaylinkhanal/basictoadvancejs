// ===============================
// Mini JS Exercises — Objects
// ===============================

// Q1: Object.keys basics
// Given:
const book = { title: "JS Guide", author: "Baral", year: 2025 };
// Task: Get all keys in an array
const bookKeys = Object.keys(book);
console.log(bookKeys);
//output: [ 'title', 'author', 'year' ]

//-------------------------------------------------------------------------------

// Q2: Object.getOwnPropertyDescriptor basics
// Given:
const laptop = { brand: "Dell", ram: 16 };
// Task: Get descriptor of "ram" and log it
const propDescription = Object.getOwnPropertyDescriptor(laptop, "ram")
console.log(propDescription);
//output: { value: 16, writable: true, enumerable: true, configurable: true }

//-------------------------------------------------------------------------------

// Q3: Object.defineProperty basics
// Given:
const phone = { brand: "Apple", model: "iPhone 15" };
// Task: Make "brand" non-writable and test by trying to reassign it
const desc = Object.defineProperty(phone, "brand", { ...phone, writable: false })
Object.assign(phone.brand = "Andriod")
console.log(phone.brand);

//-------------------------------------------------------------------------------

// Q4: Object.seal basics
// Given:
const user = { name: "Baral", age: 22 };
// Task: Seal the object and try to add a new key and delete an existing key
Object.seal(user);
user.place = "Thimi, Bkt";
delete user.age;
console.log(user)


//-------------------------------------------------------------------------------

// Q5: Spread operator for objects
// Given:
const obj1 = { a: 1, b: 2 };
// Task: Create a new object obj2 copying all keys from obj1 and add c:3

const obj2 = { ...obj1, c: 3 };
console.log(obj2);

//-------------------------------------------------------------------------------

// Q6: Combine descriptors and spread
// Given:
const student = { name: "Alice", grade: "A" };
// Task: Get descriptor of "grade" and create a new descriptor object by spreading it 
// and changing writable to false


const stdDesc = Object.getOwnPropertyDescriptor(student, "grade");
console.log(stdDesc);
//{ value: 'A', writable: true, enumerable: true, configurable: true }
//writable : is it changeable?
//enumerable : does property appear in loop?
//configurable : can you add or dlt new property in object?

const stdProp = Object.defineProperty(student, "grade", {...stdDesc, writable: false});
student.grade = "B"
console.log(stdProp);//Spoilers --- value doesnt change


//-------------------------------------------------------------------------------
