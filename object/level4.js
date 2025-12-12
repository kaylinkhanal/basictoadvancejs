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

let out=Object.values(addressDetails.secondary)
console.log(out)


// hint: first convert object to array using Object.values() method


//Q2. output should be 'kaylin lives in los angeles, usa'
let output = user.name + "lives in "+ addressDetails.primary.city+","+addressDetails.primary.country;
console.log(output)

//Q3. output should be [[name, 'kaylin'], [age, 50]]
let output2=[Object.keys(user),Object.values(user)]
console.log(output2)