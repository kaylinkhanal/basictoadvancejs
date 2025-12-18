// 1.	Capitalize the first letter of "mern".
        let str= "mern";
        console.log(str[0].toUpperCase()+ str.slice(1)); // Mern

// 2.	Count how many times "a" appears in "JavaScript".
        let str1= "JavaScript";
        let count = str1.split("a").length-1;
        console.log(count);   // 2

        let count1= str1.match(/a/g);
        console.log(count1.length);


// 3.	Reverse the string "NodeJS".
        let str2= "NodeJs";
        let ans=[...str2].reverse().join('');
        console.log(ans) // sJedoN
        let ans1=str2.split('').reverse().join('');
        console.log(ans1); // sJedoN

// 4.	Remove all spaces from " MERN Stack ".
        let str3= " MERN Stack ";
        //console.log(str3.trim()); // MERN Stack
        console.log(str3.replace(/\s+/g, "")); // MERNStack

// 5.	Convert "Hello World" into kebab-case → "hello-world".
        let str4= "Hello World";
        //console.log(str4.toLowerCase().replace(" ","-")); // hello-world
        console.log(str4.toLowerCase().replace(/\s+/g, "-")); // hello-world


// 6.	Check if "React" is in the middle of "I love ReactJS".
        let str5 = "I love ReactJS";
        let word = "React";

        let startIndex = str5.indexOf(word);
        let middleIndex = Math.floor((str5.length - word.length) / 2);
        console.log(startIndex === middleIndex); // false



// 7.	Extract username "user" from "user@example.com" before @.
        let str6= "user@example.com";
        let username = str6.split("@")[0];
        console.log(username); //user 

// 8.	Replace all occurrences of "a" with "@" in "JavaScript".
        let str7= "JavaScript";
        console.log(str7.replaceAll("a", "@")); // J@v@Script

// 9.	Swap the case of "Hello World" → "hELLO wORLD".
       let str8 = "Hello World";
        let result = str8
         .split('')
         .map(ch =>
        ch === ch.toUpperCase()
         ? ch.toLowerCase()
         : ch.toUpperCase()
        )
                .join('');

        console.log(result); // hELLO wORLD
 
        
// 10.	Merge the array ["MERN", "Stack"] into a string with a hyphen "-" → "MERN-Stack".
        let arr = ["MERN", "Stack"];
        let merged = arr.join("-");
        console.log(merged); // MERN-Stack

// 11.	Convert "12345" to an array of digits and sum them.
        let str9= "12345";
        let arrDigit = str9.split("");
        let sum=arrDigit.reduce((total,digit)=>{
                return total + Number(digit)
        },0);
        console.log(sum);  // 15

// 12.	Pad "5" with zeros to make it "005".
        let str10 = "5";
        console.log(str10.padStart(3, "0")); // 005