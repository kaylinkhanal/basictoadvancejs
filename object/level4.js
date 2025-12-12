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

// hint: first convert object to array using Object.values() method
const newArr = Object.values(addressDetails.secondary);
console.log(newArr);


//Q2. output should be 'kaylin lives in los angeles, usa'
const output =(user.name) + " lives in " + (addressDetails.primary.city) + "," + (addressDetails.primary.country);
console.log(output);


//Q3. output should be [[name, 'kaylin'], [age, 50]]
const arr = Object.entries(user);
console.log(arr);