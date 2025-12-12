const generateRandomNumber = () => {
    return Math.random()
}

const obj = {
    level: 3,
    subject: "opt math",
    topics: ["calculus", "statistics", "computer"],
    number:  generateRandomNumber()
}

let obj1={...obj}

// Q1, if obj.random is more than 0.5, add +1 to the obj.level else -1 to obj.level
    if(obj1.number>0.5)
    {
    obj1.level++;

    }
    else{
        obj1.level--;
    }
    console.log(obj1);

    
// Q2. return only the topics name starting from letter 'c'
// HINT
const output = obj1.topics.filter((item) => {
    // yedi item ko first letter 'c' ho vaney matra return garne
    if(item.startsWith("c")){
        return item;
    }
})
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
// }

const obj3= {...obj,...obj2};
console.log(obj3);

