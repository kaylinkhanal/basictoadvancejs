const arr = [3, 4, 5, 6, 1];
const arr2 = [6, 2, 3, 1, 5];

//Q1.  Output should be [3,4,5,6,1,6,2,3,1,5]
const combineElementsUsingConcat = (arr.conct = arr.concat(arr2));
console.log(combineElementsUsingConcat);
//another method using spread operator
const combineElementsUsingSO = [...arr, ...arr2];
console.log(combineElementsUsingSO);

//-----------------//

//Q2. output shoulb be [5,1,3,2,6]
const reverseOutput = arr2.reverse();
console.log(reverseOutput);

// hw: map vs foreach vs filter  in array
<>
  <p>
    Ans: Map is an array iteration method that runs a function for each element
    and returns a new array with the changed values. Length stays the same as
    the original. Eg.: adding 13% tax to price [1300, 1200, 1500]
  </p>
  <p>
    Ans: forEach is an array iteration method that runs a function for each
    element without changing original values in the array. Eg. sending messages
    to [A, B, C]
  </p>
  <p>
    Ans: In Filter, it create new array with the only element that passes a
    specified condition. Filter is most commmonly used in search, price filter,
    etc. Eg.: Selecting only fruit from this array [tomato, apple, ginger,
    table, banana]
  </p>
  <p>
    Iteration Method means going through or repeating over each element of an
    array and does something with it. There are various method to do it over an
    array like forEach, Map, Filter.
  </p>
</>;
