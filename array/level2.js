const arr = [3,4,5,6,1]

const arr2 = [6,2,3,1,5]


//Q1.  Output should be [3,4,5,6,1,6,2,3,1,5]

console.log(arr + ',' + arr2);


//Q2. output shoulb be [5,1,3,2,6]

console.log(arr2.reverse());


// Q3. output should be [1,2,3,5,6]

console.log(arr2.sort());

// Q4. output should be 5
console.log(arr2.length);

// Q5. output should be [3,4,5]
console.log(arr.slice(0,3));

// Q6. output should be [6,2,3,1,5,7,8]
arr2.push(7,8);
console.log(arr2);

// Q7. output should be [3,4,5,9,10]
arr.splice(3,2,9,10);
console.log(arr);

// Q8. output should be [4,5,9,10]
arr.shift();
console.log(arr);

// Q9. output should be [4,5,9]
arr.pop();
console.log(arr);

// Q10. output should be [5,9]
arr.splice(0,1);
console.log(arr);

// hw: map vs foreach vs filter  in array