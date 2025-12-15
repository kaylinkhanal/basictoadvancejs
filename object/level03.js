const generateRandomNumber = () => {
    return Math.random()
}

const obj = {
    level: 3,
    subject: "opt math",
    topics: ["calculus", "statistics", "computer"],
    number:  generateRandomNumber()
}

console.log(obj.number)

<<<<<<< HEAD:object/level03.js
// Q1, if obj.random is more than 0.5, add +1 to the obj.level else -1 to obj.level
console.log(obj.number);
if(obj.number > 0.5){
    obj.level + 1;
} else {
     obj.level - 1;
}
console.log(obj.number);
console.log(obj);
=======
// Q1, if obj.number is more than 0.5, add +1 to the obj.level else -1 to obj.level
>>>>>>> 3a20a94793e423ed0fe8d8ae3b962919dd657b4f:object/level3.js


//  Q2. return only the topics name starting from letter 'c'
//  HINT
const output = obj.topics.filter((item) => {
    
    return item[0].startsWith('c');
        
 
//     
});
console.log(output)

const obj2 = {
    name: 'shiva',
    address: {
        city: 'kathmandu',
        country: 'nepal'
    },
}

// combine obj and obj2 into obj3 

//expected output : 
// {
//     level: 3,
//     subject: "opt math",
//     topics: ["calculus", "statistics", "computer"],
//     number: 0.234567,
//     name: 'shiva',
//     address: {
//         city: 'kathmandu',
//         country: 'nepal'
//     },
// 

const obj3= Object.assign({}, obj, obj2);
console.log(obj3);
