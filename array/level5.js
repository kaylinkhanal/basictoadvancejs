const arr = [5,1,4]

// syntax for map 

// const mappedArr = arr.map((item) => {
//     return element * 2
// })
//console.log(mappedArr); // [10, 2, 8]
//--------------------



//Q1. if item is divisible by 2, then multiply it by 3 else multiply it by 2
// expected output: [10, 2, 12]
const mappedArr = arr.map((item) => {
    if(item % 2 === 0){
        return item * 3
    } else {
        return item * 2
    }
})
    console.log(mappedArr);

 


//Q2. use filter to get only those items which are greater than 2
// expected output: [5,4]
const filteredArr = arr.filter((item) => {
    return item > 2
})
console.log(filteredArr);

//Q3.Given an array of numbers, use the map() method to create a new array where each number is doubled.
//Expected Output: (2, 4, 6, 8, 10)
let originalarray = [1, 2, 3, 4, 5]
const doubledArrayArrow = originalarray.map(function(number)
{
return number *2;
});
console.log(doubledArrayArrow);

//Q4.Given an array of numbers, use the map() method to create a new array where each number is converted into its string representation.
//expected output:('25','30','19','42')
 let ages = [25, 30, 19, 42]
 const strings=ages.map(String);
 console.log(strings);

 //Q5.Given an array of objects, where each object has a name property, use the map()method to create a new array containing only the names.
 let users = [{name: 'Alice', age: 28},{name: 'Bob', age: 35}, {name: 'Charlie', age: 22}];
 const namesArray= users.map(object=>object.name);
 console.log(namesArray);

 //Q6.Given an array of numbers, use the filter() method to create a new array containing only the even numbers.
 let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 function isEven(number) {
  return number % 2 === 0;}
 const even = numbers.filter(isEven);
 console.log(even);
 
 //Q7. Given an array of strings names, use the filter() method to create a new array containing only the names that have a length greater than 5 characters.
 let names = ['Al', 'Bob', 'Charlie', 'Dana', 'Eve', 'Frankie'];
 const longnames= names.filter(name => name.length>5);
 console.log(longnames);

 //Q8.convert given array to capital 
 const input=['ram','shyam','hary'];
 const uppercase=input.map((item)=>{
    return item.toUpperCase();
 })
 console.log(uppercase);
// Q9.Use map to create a new array where every number in the numbers array is doubled..
const number = [2, 5, 10, 3];
const double= number.map(n=>n*2);
console.log(double);

//Q10. create a new array where every word is converted to uppercase.
const words= ['one', 'two', 'three'];
/*const upper=words.map((item)=>{
    return item.toUpperCase();
})
console.log(upper);*/

const upper=words.map(words=> words.toUpperCase());
console.log(upper);

//Q11.use map to create a new array where each object is modified to include a new boolean property called isActive and set its value to true.
const user = [
    { name: 'Alice', role: 'Dev' },
    { name: 'Bob', role: 'Tester' }
];
const array= user.map(obj=>{
    return {...obj, isActive: true};
});
console.log(array)


// Q12.Use map to create a new array where each number is converted into a string prefixed with the dollar sign$.
 numbers= [1, 2, 3, 4, 5]
 const num =numbers.map(number => `$${number}`);
 console.log(num)

//Q13.use filter to create a new array containing only the ages that are 18 or older (eligible to vote).
ages = [12, 18, 25, 8, 30];
const older = ages.filter(checkadult);
function checkadult(age)
{
    return age>=18;
}
console.log(older);

// Q14.use filter to create a new array containing only the products whose price is less than 10.
const products = [
    { name: 'A', price: 5 },
    { name: 'B', price: 12 },
    { name: 'C', price: 8 }
];
const affordableproduct=products.filter(products=> products.price<10);
console.log(affordableproduct);





 


