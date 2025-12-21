let words = ["apple", "bat", "catastrophe", "dog"];
// Sort by length ascending
// Output: ["bat","dog","apple","catastrophe"]

const sortByLength = words.sort((a, b) => a.length - b.length);
console.log(sortByLength);//[ 'bat', 'dog', 'apple', 'catastrophe' ]

let nums = [2, 11, 101, 3];
// Sort lexicographically → ["101","11","2","3"]
// Output: [101,11,2,3]

const lexSort = nums.sort();
console.log(lexSort);//[ 101, 11, 2, 3 ]

let arr = [5, 8, 1, 4, 3, 10, 7];
// Sort by even numbers first, then by odd numbers
// Expected: [8,4,10,5,1,3,7]

const customSort = arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) {
        return -1;
    } else if (a % 2 !== 0 && b % 2 === 0) {
        return 1;
    } else {
        return a - b;
    } 
});
console.log(customSort);//[ 8, 4, 10, 1, 3, 5, 7 ]

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
const sortedPlayers = players.sort((a, b) => {
    if (b.score === a.score) {
        return a.name.localeCompare(b.name);
    }
    return b.score - a.score;
});
console.log(sortedPlayers);

let names = ["hari", "Anu", "BIBEK", "chandra"];
// Sort names case-insensitively A→Z
// Expected Output: ["Anu", "BIBEK", "chandra", "hari"]
const caseInsensitiveSort = names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(caseInsensitiveSort);//[ 'Anu', 'BIBEK', 'chandra', 'hari' ]

/*******************************
 *? End of file
 *******************************/