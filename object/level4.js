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
const obj = Object.values(addressDetails.secondary);
const obj10 = obj.map((value) => {
    return value.toUpperCase();
});
console.log(obj10);

// hint: first convert object to array using Object.values() method


//Q2. output should be 'kaylin lives in los angeles, usa'
console.log(`${user.name}  lives in ${addressDetails.primary.city}, ${addressDetails.primary.country} `);


//Q3. output should be [[name, 'kaylin'], [age, 50]]
const arr = Object.entries(user);
console.log(arr);