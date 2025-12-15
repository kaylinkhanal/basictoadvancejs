// HIGH LEVEL DIFFICULTY PROBLEM
const user = {
    name: 'kaylin',
    age: 50
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

const output = Object.values(addressDetails.secondary).map(value => value.toUpperCase());
console.log(output);

// Q2. output should be 'kaylin lives in los angeles, usa'

const output2 = `${user.name} lives in ${addressDetails.primary.city}, ${addressDetails.primary.country}`;
console.log(output2);

// Q3. output should be [[name, 'kaylin'], [age, 50]]

const output3 = Object.entries(user);
console.log(output3);
