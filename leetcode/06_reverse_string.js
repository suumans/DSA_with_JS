// input: s = "the sky is blue"
// output: "blue is sky the"


let reverseWords = function(s) {
    let result = []
    let length = s.length
    let word = ""

    for (let i = 0; i < length; i++) {  
        if (s[i !== " "]) {  // check if the character is not a space
            word += s[i]  // add the character to the word
        } else if (word.length > 0) {  // check if the word is not empty
            result.unshift(word)  // add the word to the beginning of the result array
            word = ""  // reset the word
        }
    }
    if (word.length > 0) {  // check if the last word is not empty
        result.unshift(word)  // add the last word to the beginning of the result array
    }
    return result.join(" ")  // join the words in the result array with spaces
}



s = "the sky is blue"
console.log(reverseWords(s));