// Q1. write a function that takes in array as input and calculates the length of that 

function arr(Arr){
return Arr.length;
}
console.log(arr([9,7,4,2,4,1]))
 


//Q2. write a function that takes in array of number as an input and calculates the average
// of the numbers

const  name=(Arr1)=>{
    let sum=0;
    Arr1.forEach(item => {
        sum=sum+item;
        
    })
  return sum/(Arr1.length);
}
console.log(name([10,20,30,40]));

//Q3. write a function that takes in an object as an input and returns the total number of keys



//Q4. write a function that takes in array as an input and returns the sum of all the numbers
// using forEach loop inside the function 