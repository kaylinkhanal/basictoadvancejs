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
 const input=['ram','bishmeeta','aloj'];
 const uppercase=input.map((item)=>{
    return item.toUpperCase();
 })
 console.log(uppercase);


 


