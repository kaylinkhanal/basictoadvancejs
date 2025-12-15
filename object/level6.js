// Q1. Using `in` operator to check key inside object
const student = {
    name: "Aswin",
    age: 24,
    grade: 90
};
// Write code to check whether "grade" key exists using `in` operator
// If exists -> print "Grade found"
// Else -> print "No grade"
if ('grade' in student) {
    console.log("Grade Found")
} else {
    console.log("No Grade")
}

// Q2. Using loop + `in` operator
const inventory = {
    laptop: 10,
    mouse: 25,
    keyboard: 0
};
// Use a loop + `in` operator to check if "keyboard" exists
// If exists -> print "Item exists"
// Else -> print "Missing item"
if ('keyboard' in inventory) {
    console.log("Item exists!")
} else {
    console.log("Item doesn't exist!")
}

