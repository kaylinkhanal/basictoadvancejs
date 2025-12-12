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

//console.log(newArr);
const upperCaseArr = newArr.map((item) => {
return item.toUpperCase();


});
console.log(upperCaseArr);



//Q2. output should be 'kaylin lives in los angeles, usa'
const output =(user.name) + " lives in " + (addressDetails.primary.city) + "," + (addressDetails.primary.country);
console.log(output);


//Q3. output should be [[name, 'kaylin'], [age, 50]]
const arr = Object.entries(user);
console.log(arr);

//Q4. output should be {name: 'KAYLIN', age: 50}
// const newUser = {
//     ...user,
//     name:user.name.toUpperCase()
// };
// console.log(newUser);

              //or

const updated = Object.assign({}, user, {
    name: user.name.toUpperCase()
});
console.log(updated);


//Q5. output should be {primaryCity: 'los angeles', primaryCountry: 'usa', secondaryCity: 'Gorkha', secondaryCountry: 'Nepal'}
const merged = {
    primaryCity: addressDetails.primary.city,
    primaryCountry: addressDetails.primary.country,
    secondaryCity: addressDetails.secondary.city,
    secondaryCountry: addressDetails.secondary.country
};
console.log(merged);

//Q6. output should be ['PRIMARY', 'SECONDARY']
const keys = Object.keys(addressDetails);
//console.log(keys);

const upper2 = keys.map((item) => {
return item.toUpperCase();
});
console.log(upper2);


//Q7. output should be {cityCount: 2, countryCount: 2}
const counts = {
    cityCount: Object.keys(addressDetails).length,
    countryCount: Object.keys(addressDetails).length
};
console.log(counts);


// Q8. Merge user and addressDetails into a single object
const newObj = Object.assign({}, user, addressDetails);
console.log(newObj);





