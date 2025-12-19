// 1.	Capitalize the first letter of each word in "mern stack tutorial" → "Mern Stack Tutorial".
        let word = "mern stack tutorial";
        let output = "";
        for(i=0;i<word.length;i++){
            if(i===0 || word[i-1]=== " ")
            {
                output = output + word[i].toUpperCase()
            }
            else{
                output = output + word[i]
            }
        }
        console.log(output); // Mern Stack Tutorial

// 2.	Check if "JavaScript" is a palindrome (ignore case).
        let str1= "JavaScript"
        let ignCase = str1.toLowerCase()
        let reverseStr1 = ignCase.split("").reverse().join("")
        if(ignCase===reverseStr1){
            console.log(`${str1} is palindrome`)
        }
        else{
            console.log(`${str1} is not palindrome`)
        }
        // JavaScript is not palindrome

// 3.	Extract all digits from "Order #12345" → "12345".
        let digits = "Order #12345";
        let extractedDigit =Number(digits.replace(/\D/g,""));
        console.log(extractedDigit); // 12345
        console.log(typeof(extractedDigit)); // number

// 4.	Replace "http" with "https" in "http://example.com".
        let http = "http://example.com"
        let https = http.replace("http","https")
        console.log(https); 

// 5.	Remove all vowels from "MERN Stack".
        let str2 = "MERN Stack"
        let result=""
        let lowerstr2= str2.toLowerCase();
        for (i=0;i<lowerstr2.length;i++){
            let char = lowerstr2[i]
            if(char!=="a" && char!=="e" && char!=="i" && char!=="o" && char!=="u")
            {
                result+=str2[i];
               

            }
        } 
         console.log(result);  // MRN Stck

// 6.	Count how many times "JS" occurs in "JS and NodeJS" using a loop.
        let str3 = "JS and NodeJS";
        let word1 = "JS";
        let count = 0;

        for (let i = 0; i <= str3.length - word1.length; i++) {
        if (str3[i] === word1[0] && str3[i + 1] === word1[1]) {
        count++;
        }
        }

        console.log(count); // 2

// 7.	Format "1234567890" as a phone number → "(123) 456-7890".
        let num= "1234567890"
        let formatted= `(${num.slice(0,3)}) ${num.slice(3,6)}-${num.slice(6)}`;
        console.log(formatted);

// 8.	Convert "hello world" to title case using a function.
        function toTitleCase(str)
        {
            let words = str.split(" ");
            for (let i=0;i<words.length;i++)
            {
                words[i]=words[i][0].toUpperCase()+ words[i].slice(1).toLowerCase();
            }
            return words.join(" ");
        }
        console.log(toTitleCase("hello world"));  // Hello World
        console.log(toTitleCase("learn MERN stack")); // Learn Mern Stack
        
// 9.	Truncate "ReactJS is awesome" to 10 characters and add "...".
        let str5="ReactJS is awesome"
        console.log(str5.slice(0,10).concat("..."))

// 10.	Check if a string "abc123" contains both letters and numbers.
        let string = "abc123"
        let hasLetter=false;
        let hasNumber=false;
        for (let i=0;i<string.length;i++)
        {
            let char =string[i];
        
        if((char>="a" && char <="z") || (char>="A" && char <="Z"))
        {
            hasLetter=true;
        }

        if(char>="0" && char <="9")
        {
            hasNumber=true;
        }

        if(hasLetter && hasNumber)
        {
            break;
        }
        }
        console.log(hasLetter && hasNumber); // true 

// 11.	Merge and deduplicate words from arrays ["MERN", "Stack"] and ["Stack", "JS"] → "MERN Stack JS".
        let arr1= ["MERN", "Stack"]
        let arr2=["Stack", "JS"]
        let merged = arr1.concat(arr2);
        let unique = [...new Set(merged)]
        console.log(unique.join(" "));  // MERN Stack JS

// 12.	Convert "camelCaseString" to "camel-case-string".
        let camelCase = "camelCaseString"
        let kebab=""
        for(i=0;i<camelCase.length;i++)
        {
            char = camelCase[i]
            if(char>="A" && char<="Z")
            {
                kebab+="-" + char.toLowerCase()
            }
            else
            {
                kebab+=char;
            }
        }
        console.log(kebab);


// 13.	Count the number of words in "Learn MERN Stack from scratch".
        let str6="Learn MERN Stack from scratch"
        let splitted=str6.split(" ")
        console.log(splitted.length); // 5