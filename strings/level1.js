// // // output should be "hello hari"
const name = "hari";
console.log("hello " + name);

//"hari" outptut should be "ari"
console.log(name.slice(1));

// "hari "output should be "HARI"
console.log(name.toUpperCase());

let cast = "THAPA";
console.log(cast.toLowerCase());

console.log(cast.slice());

console.log(name + " " + "Bahadur " + cast);

const word = "typescript";
const type = word.replace("type", "java");
console.log(type);

//  console.log(greeting.trim());

let greeting = "  hello world   ";
console.log(greeting.trim());

let language = "nodejs";
console.log(language.length);

let replace = "world hello";
console.log(language.indexOf("j"));

let framework = "nodejs";
console.log(framework.includes("js"));

let name3 = "world hello";
console.log(name3.startsWith("world"));

// // //replace the word jello to hello

let myStr = "jello world";
console.log(myStr.replace("jello", "hello"));

function abc(a, b, c, ...val) {
  console.log(a, b, c, val);
}
abc(1, 2, 3, 4, 5, 6, 7);
