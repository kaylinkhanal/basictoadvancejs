const generateRandomNumber = () => {
    return Math.random()
}

const obj = {
    level: 3,
    subject: "opt math",
    topics: ["calculus", "statistics", "computer"],
    number:  generateRandomNumber()
}
<<<<<<< HEAD
console.log(obj.number);
=======

console.log(obj.number)
>>>>>>> 3a20a94793e423ed0fe8d8ae3b962919dd657b4f

// Q1, if obj.number is more than 0.5, add +1 to the obj.level else -1 to obj.level

if (obj.number > 0.5) {
    obj.level = obj.level + 1;
} else {
    obj.level = obj.level - 1;
}
console.log(obj.level);


// Q2. return only the topics name starting from letter 'c'

const output = obj.topics.filter((item) => {
    if (item.toLowerCase().charAt(0) === 'c') {
return { key: 'value' };
}
})
console.log(output)

const obj2 = {
    name: 'shiva',
    address: {
        city: 'kathmandu',
        country: 'nepal'
    },
};

// combine obj and obj2 into obj3 

const merged = { ...obj, ...obj2 };
console.log(merged);



