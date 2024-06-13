// count vowels in a string

// function isVowel(character) {
//     let lowerCharacter = character.toLowerCase();
//     let vowels = "aeiou";

//     if (vowels.indexOf(lowerCharacter) !== -1) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function countVowels(string) {
//     let count = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (isVowel(string[i])) {
//             count++;
//         }
//     }
//     return count
// }
//console.log(countVowels("s_sarkar"));


// Recursive solution

function recursiveCountVowels(string, stringLength) {
    //console.log(`Current string: ${string.substring(0, stringLength - 1)}, string length: ${stringLength}`);
    if (stringLength == 1) {
        return Number(isVowel(string[0]))
    }

    return recursiveCountVowels(string, string.length - 1) + isVowel(string[string.length - 1])
}

let myString = "s_sarkar";
console.log(recursiveCountVowels(myString, myString.length));