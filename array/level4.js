let words = ["apple", "bat", "catastrophe", "dog"];
// Sort by length ascending
// Output: ["bat","dog","apple","catastrophe"]


let nums = [2, 11, 101, 3];
// Sort lexicographically → ["101","11","2","3"]
// Output: [101,11,2,3]


let arr = [5, 8, 1, 4, 3, 10, 7];
// Sort by even numbers first, then by odd numbers
// Expected: [8,4,10,5,1,3,7]


let players = [
    { name: "Rita", score: 88 },
    { name: "Gita", score: 88 },
    { name: "Sita", score: 91 },
    { name: "Nita", score: 75 }
];
// Sort by score descending, if score same then by name ascending
// Expected Output:
// [
//   {name:"Sita", score: 91},
//   {name:"Gita", score: 88},
//   {name:"Rita", score: 88},
//   {name:"Nita", score: 75}
// ]


let names = ["hari", "Anu", "BIBEK", "chandra"];
// Sort names case-insensitively A→Z
// Expected Output: ["Anu", "BIBEK", "chandra", "hari"]