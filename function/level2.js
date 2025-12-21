// Q1. write a function that takes in array as input and calculates the length of that array
const calculateArrayLength=(arr) =>{
    return arr.length;
}

console.log(calculateArrayLength([1,2,3,4,5]))


//Q2. write a function that takes in array of number as an input and calculates the average
// of the numbers
const calculateAverage = (numArr)=>{
    let sum=0;
    numArr.forEach((item) => {
        sum=sum+item
    });
        return sum/numArr.length

    }
   
console.log(calculateAverage([10,20,30,40]))



//Q3. write a function that takes in an object as an input and returns the total number of keys
const obj=(ob)=>{
 return Object.keys(ob)
}
console.log(obj({name:'Bishmeeta',caste:'Thapa'}).length)


//Q4. write a function that takes in array as an input and returns the sum of all the numbers
// using forEach loop inside the function 
const sumOfArray = (arr) => {
    let sum=0;
    arr.forEach((item) => {
        sum=sum+item
    }
    );
    return sum
}
console.log(sumOfArray([1,2,3,4,5]))





//Q5.Write a function that takes an object and counts only numeric values.
 
const countNumericValues = (obj) => {   
    let count = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            count++;
        }
    }
    return count;
};

console.log(countNumericValues({a:1, b:'hello', c:3, d:true, e:5})) 

