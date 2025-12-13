// HIGH LEVEL DIFFICULTY PROBLEM
const user = {
    name: 'kaylin',
    age:50
}

const addressDetails = {
    primary: {
        city: 'los angeles',
        country: 'usa'
    },
    secondary: {
        city: 'Gorkha',
        country: 'Nepal'
    }
}

// Q1. output should ['GORKHA', 'NEPAL']
console.log(Object.values(addressDetails.secondary))
//now convert it in to uppercase
const output2 = Object.values(addressDetails.secondary).map(item => item.toUpperCase());
console.log(output2);


// hint: first convert object to array using Object.values() method


//Q2. output should be 'kaylin lives in los angeles, usa'
console.log(` ${user.name} lives in ${addressDetails.primary.city} , ${addressDetails.primary.country} `);
// console.log("")
// console.log('')
// console.log(``)


//Q3. output should be [[name, 'kaylin'], [age, 50]]
const output3 = Object.entries(user);//entries provide the all data store in user
console.log(output3);

