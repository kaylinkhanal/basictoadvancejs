//Q1.Create a nested object (level 2) inside an object and print one inner value.
const student={
    name:'shreya',
    class:10,
    scores:{math:45}

}
console.log(student.scores.math)

//2. Merge two simple objects using spread operator {...obj1, ...obj2}.
const location = {
  city: 'kathmandu',
  country:'nepal'
}
 console.log(location)
    const complete={...student, ...location}

console.log(complete)



//Q3. Check if a key exists in an object using "key" in obj.
console.log("city" in location)
console.log("country" in location)


//Q4. Convert an object into an array of [key, value] using Object.entries().

console.log(Object.entries(location))

//Q5. Loop through object keys using for...in.
for(let key in location){

    console.log(key)
    console.log(location[key])
}

//Q6. Create an object and print type using typeof.
console.log(typeof location)

//Q7. Freeze an object and try to change its value
Object.freeze(location)
location.city="Itahari"
console.log(location.city)
