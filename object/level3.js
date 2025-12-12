//

const student = {
  name: "ram",
  age: 18,
  grade: "A",
};
console.log(student);
// print values from prices object
let prices = {
  apple: 120,
  banana: 60,
  mango: 150,
};
let arr = Object.values(prices);
console.log(arr);
// print only address from person object
let person = {
  name: "ram",
  age: 20,
  address: "kathmandu",
};
console.log(person["address"]);
// change the year 2022 to 2025
let cars = {
  brand: "Toyota",
  model: "Fortuner",
  year: 2022,
};
cars.year = 2025;
console.log(cars);
//count the length of kyes from user object
let user = {
  name: "Shyam",
  hobby: "Coding",
  isStudent: true,
};
let arr2 = Object.keys(user).length;
console.log(arr2);
//output should be name: "Aarav"
let employee = {
  name: "Aarav",
  salary: 30000,
};
delete employee.salary;
console.log(employee);

// add 13% vat in goods
let vat = {
  goods: 5000,
};

let totalprice = (vat.goods * 13) / 100 + vat.goods;
console.log(totalprice);

// output should be 60 sum of the values 
let obj = {
  a: 10,
  b: 20,
  c: 30,
  d:40
};
let arr3 = Object.values(obj);
let sum = arr3.reduce((acc, val) => {
  return acc + val;
}, 0);
console.log(sum);
