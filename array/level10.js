const arr = ['ram',90,70, 50]
const arr2 = ['shyam', 99,88,35]

// Q1. create an array which contains names of students only

// hint use typeof operator
const names = arr.concat(arr2).filter((item) => {   
    if(typeof item === 'string'){
        const arr = ['ram', 90, 70, 50];
        const arr2 = ['shyam', 99, 88, 35];

        // Q1. create an array which contains names of students only
        // hint: use typeof operator
        const names = arr.concat(arr2).filter((item) => typeof item === 'string');
        console.log(names);

        // Q2. calculate the total score of ram and shyam
        let sum = 0;
        arr.concat(arr2).forEach((item) => {
            if (typeof item === 'number') {
                sum += item;
            }
        });
        console.log(sum);

        // Q3. create an array which contains scores greater than 80
        const highScores = arr.concat(arr2).filter((item) => typeof item === 'number' && item > 80);
        console.log(highScores);

        // Q4. create an array which contains the length of each name
        const arr3 = ['yogesh', 'sujan', 'anil'];
        const nameLengths = arr3.map((item) => item.length);
        console.log(nameLengths);

        // Q5. print each name with its length in the format "name: length"
        arr3.forEach((item) => {
            console.log(item + ":" + item.length);
        });

        // Q6. create an array which contains names in uppercase
        const upper = ['yogesh', 'sujan', 'anil'];
        const newUpper = upper.map((item) => item.toUpperCase());
        console.log(newUpper);
    // yedi item typeof 'number' ho vaney sum ma add garne

});

console.log(sum);



//Q3. create an array which contains scores greater than 80

const highScores = arr.concat(arr2).filter((item) => {

    if (item > 80){

        return item;
