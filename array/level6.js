//map()
//Given the array [1, 2, 3, 4, 5], use map to create a new array where every number is multiplied by 2.
const arr = [1, 2, 3, 4, 5,6,7,8,9]
const newArray = arr.map((value) => {
    return value * 2 ;
});
console.log(newArray);

//use map to convert each number into its string representation
const arrString = arr.map((value) => {
    return value.toString()
});
console.log(arrString);

//Given the array ["apple", "banana", "kiwi"], use map to create a new array containing the length of each string
const fruits = ["apple", "banana", "kiwi", "orange", "mango"]
const fruitLength = fruits.map((item) =>{
    return item.length

});
console.log(fruitLength);

//forEach()
//use forEach to print each number to the console.
const array = arr.forEach(value =>{
    console.log(value)
});

//use forEach to print a message for each fruits, like: "The is a.......".
const FruitsName = fruits.forEach(item =>
    console.log("this is a "+ item)
);

//use forEach to calculate and print the sum of all numbers
let sum = 0;
const calArray = arr.forEach(value =>
    sum = sum + value);
  console.log(sum);

//filter()
//use filter to create a new array containing only the numbers greater than 2
const greaterArray = arr.filter((value) => {
    if (value >2){
        return value
    }
});
console.log(greaterArray);

//use filter to create a new array containing only the even numbers.
const evenArray = arr.filter((value) => {
    if(value % 2 === 0)
        return value
});
console.log(evenArray);

//se filter to create a new array containing only the strings that have a length of 4.
const lengthArray = fruits.filter((word) =>{
    if(word.length > 4)
        return word
});
console.log(lengthArray);

//use filter to keep only the strings that do not contain the letter 'o'.
const letterArray = fruits.filter((word) =>{
 return word.includes("o")
});
console.log(letterArray);

//reduce()
//
