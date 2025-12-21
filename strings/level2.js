/*//Basic Example

const x = 1;
const y = x + 2;
console.log('Sum is', y);



- This code gets wrapped in main() and main is added to Call Stack.
- log('Sum is 3') added to call stack.
- On console we would get 'Sum is 3'. Now log function is finished and gets removed from Call Stack.
- Now end of script, main function gets popped out of Call Stack.
*/
 

console.log("A");

setTimeout(() => console.log("B"));

Promise.resolve().then(() => console.log("C"));

console.log("D");  