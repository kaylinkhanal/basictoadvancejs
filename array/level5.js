//Q1.Return numbers that are between 10 and 50 (exclusive)
const arr= [4, 10, 25, 50, 60, 45]
let output=arr.filter((item)=>
{
if(item>10 && item<50){
    return item;

}
})
console.log(output);

//Q2.Change each string to "Hello <name>"
const arr2= ["Ram", "Sita", "Gita"]
const name ="Hello";
let output2=arr2.map((item)=>
{
    return name + " " + item;
})
console.log(output2)

//Q3. From the array, take only even numbers, then divide each by 2
const arr3= [3, 6, 9, 12, 15]
let output3=arr3.filter((item)=>
{
 if(item%2===0){
    return item;
 }

})
let output4=output3.map((item)=>
{
    return item/2;
})
console.log(output4);
//another method
let result=arr3.filter((item=>item%2===0))
.map((item=>item/2));
console.log(result);


//Q4.Convert array of prices to include 13% tax
const arr4=[100,200,50]
let tax=[0.13]
let amountAfterTax=arr4.map((item)=>
{
    return item*tax+item;
})
console.log(amountAfterTax)

//Q5.Return words that start with letter 'a' or 'A'
const arr5= ["Apple", "ball", "Ant", "cat", "arm"]
let output5=arr5.filter((item)=>{
    if(item.startsWith('a')|| item.startsWith('A')){
        return item;
    }
})
console.log(output5)