// math, science, opt math, opt comp

const obj = {
  level: 1,
  subject: "math",
  topics: ["algebra", "geometry", "trigonometry"],
};

// Q1. output should be trigonometry
console.log(obj.topics[2]);

//Q2. output should be 3 (number of topics)
console.log(obj.topics.length);

//Q3. add one level to the current level in the object
//expected output : level: 2
obj.level = 2;
console.log(obj.level);

//Q4. delete subject from the object
delete obj.subject;
console.log(obj);
