//Q1.Use reduce() to find the sum of all numbers in the array.
const arr= [1, 2, 3, 4, 5]
const initialvalue=0;
const sumWithinitialvalue= arr.reduce((a,b) => a+b,initialvalue);
console.log(sumWithinitialvalue);

//Q2. Use reduce() to find the total number of elements in the array.
const a= [10, 20, 30, 40, 50]
const lgth=a.reduce((count)=> count+1,0);
console.log(lgth)

//Q3.Find the total sum of all the numbers in the array.
const array=[10, 5, 20, 1, 14]
const initial=0;
const sum=array.reduce((a,b)=> a+b,0);
console.log(sum)

//Q4.Find the sum of all the numbers after they have been individually doubled.
const double=array.reduce((a,b)=>a+b*2,0);
console.log(double)

//Q5.Start with a total of 100 and subtract every element in the array from it.
const init=100;
const sub=array.reduce((a,b)=> a-b,100);
console.log(sub)

//Q6.Find the smallest number in the array.
/*const smaller=array.reduce((a,b)=>{
    return Math.min(a,b);
});
console.log(smaller);*/

const smaller=array.reduce((a,b)=>{
    return a<b ? a:b;
});
console.log(smaller);

//Q7.Find the largest odd number in the array.
const odd= array.reduce((a,b)=>{
   if(b%2!==0){
    return Math.max(a,b);
}
return a;
}, -0);
console.log(odd)

// Q8.: Convert the numbers into a single string, separated by commas.
const string=arr.reduce((a,b)=> {
    return a === "" ? b.toString() : a + "," + b.toString();},
    "");
console.log(string);







