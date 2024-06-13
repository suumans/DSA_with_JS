// Reverse a string

// iteratively
// function reverseString(str) {
//     let newStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }
//     return newStr;
// }
// console.log(reverseString("s_sarkar"));


// recursively
/**
function reverseString(str) {
    
    console.log(`Current string: ${str}`);

    // This is the base case. It's like saying, "If there are no more letters to reverse, just return an empty string."
    if (str === "") {
        return "";
    } else {
            return reverseString(str.substr(1)) + str.charAt(0);
        }
}

console.log(reverseString("s_sarkar"));
*/


//////*******//////****    Break down of the above code */ */
// Let's break down the line return reverseString(str.substr(1)) + str.charAt(0); in a simple way:


// str.substr(1): This part of the code takes the string str and removes the first character. For example, if str is "hello", str.substr(1) will be "ello".



// reverseString(str.substr(1)): Here, we are calling the function reverseString again, but this time with the new string that doesn't have the first character. So, if str was "hello", now we are calling reverseString("ello").



// str.charAt(0): This gets the first character of the original string str. For "hello", str.charAt(0) is "h".

// We first call reverseString on the rest of the string, excluding the first character.

// Then, we add the first character of the original string to the end of the result from the recursive call.



// This process repeats, moving the first character to the end each time, until the string is completely reversed. For example:

// Original call: reverseString("hello")

// Inside the function: reverseString("ello") + "h"

// Next level: reverseString("llo") + "e" + "h"

// And so on, until the string is reversed to "olleh".


function reverseString(str) {
    console.log(`Current string: ${str}`);
    // base case
    if (str === "") {
        return "";
    }

    let reversePart = reverseString(str.substr(0, str.length - 1));
    let result = str[str.length - 1] + reversePart;
    console.log(`Resulting: Last character: ${str[str.length - 1]}, added in front of: ${reversePart}, to form a result: ${result}`);
    return result;
}

console.log(reverseString("s_sarkar"));