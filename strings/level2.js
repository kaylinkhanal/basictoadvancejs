// 1.	Get the last character of "Programming".
        let str= "Programming";
        console.log(str.charAt(str.length-1)); // g
        console.log(str.slice(-1)); // g

// 2.	Find the index of "Stack" in "MERN Stack".
        let str1= "MERN Stack";
        console.log(str1.indexOf("Stack")); // 5

// 3.	Extract "Stack" from "MERN Stack" using substring.
        let str2="MERN Stack";
        console.log(str2.substring(5)); // Stack

// 4.	Repeat the string "Hi! " 3 times.
        let str3= "Hi! ";
        console.log(str3.repeat(3)); // Hi! Hi! Hi! 

// 5.	Split "React,Node,Express,Mongo" into an array of words.
        let str4 = "React,Node,Express,Mongo";
        console.log(str4.split(","));  // [ 'React', 'Node', 'Express', 'Mongo' ]

// 6.	Convert "Hello World" to an array of characters.
        let str5= "Hello World";
        console.log(str5.split("")); // [ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']

// 7.	Check if "ReactJS" starts with "React".
        let str6= "ReactJS";
        console.log(str6.startsWith("React")); // true

// 8.	Check if "NodeJS" ends with "JS".
        let str7= "NodeJS";
        console.log(str7.endsWith("JS"));  // true

// 9.	Convert "123" to a string and then add "456" using +.
        let num = 123;
        let strNum= String(num);
        console.log(strNum + "456"); // 123456

// 10.	Remove the first and last characters from "MERN".
        let word = "MERN";
        console.log(word.slice(1,-1));  // ER

// 11.	Extract the domain "example.com" from "user@example.com".
        let str8= "user@example.com";
        let domain = str8.split("@")[1];
        console.log(domain);  // example.com

// 12.	Insert "Awesome " at the start of "JS" using template literals.
        let word1= "JS";
        console.log(`Awesome${word1}`); // AwesomeJS