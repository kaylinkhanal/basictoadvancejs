// 1.	Create a string "Hello World" and print its length.
        let str = "Hello World";
        console.log(str.length); // 11

// 2.	Extract the first character of "JavaScript".
        let firChar = "JavaScript";
        console.log(firChar.charAt(0)); // J

// 3.	Convert "react" to uppercase.
        console.log("react".toUpperCase()); // REACT

// 4.	Convert "NODEJS" to lowercase.
        console.log("NODEJS".toLowerCase()); // nodejs

// 5.	Concatenate "Hello" and "World" using +.
        let str1 = "Hello";
        let str2= "World";
        console.log(str1.concat(" ",str2)); // Hello World

// 6.	Concatenate "Hello" and "World" using template literals.
        console.log(`${str1} ${str2}`); // Hello World

// 7.	Check if "JavaScript" includes "Script".
        let str3= "JavaScript";
        console.log(str3.includes("Script")); // true

// 8.	Extract "World" from "Hello World" using slice.
        let str4= "Hello World";
        let extractStr=str4.slice(6,11);
        console.log(extractStr); // World

// 9.	Trim the whitespace from " MERN Stack ".
        let str5= " MERN Stack ";
        console.log(str5.trim()); // MERN Stack
        
// 10.	Replace "World" with "JS" in "Hello World".
        let str6= "Hello World";
        console.log(str6.replace("World","JS")); // Hello JS

