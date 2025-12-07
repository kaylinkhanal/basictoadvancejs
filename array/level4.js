
//Q1.If number is even → subtract 1, else add 1
const Input= [3, 6, 9]
let output=Input.map((item)=>{

if(item%2===0){
    return item-1;
}
else{
    return item+1
}
})
console.log(output)


//Q2.Return only odd numbers
const arr= [2, 5, 8, 11, 14]
let output2=arr.filter((item)=>{
    if(item%2!==0){
    return item;
    }
})
console.log(output2)

//Q3.Convert each name to uppercase
const name=['ram','aloj','bishmeet']

let output3=name.map((item)=>{
    return item.toUpperCase();
})
console.log(output3)

//Q4.Return numbers less than 50
const input= [20, 55, 12, 77, 40]
let output4=input.filter((item)=>{
    if (item<50){
        return item;
    }
})
console.log(output4)


//Q5.Return names with length greater than 4
const arr2= ["sun", "apple", "dog", "banana"]

let output5=arr2.filter((item)=>{
    if (item.length>4){
        return item;
    }
});
console.log(output5)