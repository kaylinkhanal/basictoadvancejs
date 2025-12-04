const name = 'krishna'
// Q1 output should be "Hi krishna"
// hint use + operator to attach 'Hello' to name variable
const output = 'Hi ' + name;
console.log(output)

// Q2 output should be 'rishna'
const originalName = 'krishna';
const modifyName = originalName.slice(1);
console.log(modifyName)

// Q3 output should be 'KRISHNA'
const name2='krishna';
console.log(name2.toUpperCase())

const word= 'Typescript';
// Q4 output should be 'Javascript'
const newWord = word.replace('Type','Java');
console.log(newWord)

let greeting = '   Hello World!   ';
// Q5 output should be 'Hello World!'
const trimmedGreeting = greeting.trim();
console.log(trimmedGreeting)

const language = 'javascript';
//Q6 output should be 10
console.log(language.length);

// Q8 find the index of 'p' in language variable, output should be 4
console.log(language.indexOf('p'))

const framework = 'nodejs';
// Q9 check if the framework variable includes the substring 'js', output should be true
console.log(framework.includes('js'))
