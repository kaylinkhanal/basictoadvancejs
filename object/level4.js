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
const outputs=Object.values(addressDetails.secondary)
console.log(outputs)

const uppercase=Object.values(addressDetails.secondary).map(item=>item.toUpperCase()
);
console.log(uppercase)





//Q2. output should be 'kaylin lives in los angeles, usa'
const details=user.name+ " " + 'lives' + " " + 'in' + " "+ addressDetails.primary.city + ',' +addressDetails.primary.country
console.log(details)


//Q3. output should be [[name, 'kaylin'], [age, 50]]
const results=Object.entries(user)
console.log(results)
