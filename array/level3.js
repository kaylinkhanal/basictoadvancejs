let people = [
    { name: "Aaku", age: 25 },
    { name: "Baku", age: 19 },
    { name: "Chaku", age: 30 },
];
// Sort by age ascending
// Expected Output: [{name: "B", age: 19}, {name: "A", age: 25}, {name: "C", age: 30}]
people_age = people.map(peoples=>peoples.age)
console.log(people_age);//[ 25, 19, 30 ]
people_age.sort()
console.log(people_age);//[ 19, 25, 30 ]---> using map property

people.sort((a, b)=>a.age - b.age);
console.log(people)
//  Output: [{ name: 'Baku', age: 19 },
//  { name: 'Aaku', age: 25 },
//  { name: 'Chaku', age: 30 }]

let students = [
    { name: "Hari", grade: 80 },
    { name: "Anu", grade: 95 },
    { name: "Kiran", grade: 75 },
];
// Sort by grade descending
// Expected Output: [{name: "Anu", grade: 95}, {name: "Hari", grade: 80}, {name: "Kiran", grade: 75}]
students.sort((a,b)=>b.grade-a.grade)
console.log(students);

let dates = [
    new Date("2021-03-25"),
    new Date("2020-11-02"),
    new Date("2022-01-10"),
];
// Sort from oldest → newest
// Expected Output: [new Date("2020-11-02"), new Date("2021-03-25"), new Date("2022-01-10")]

console.log(dates);