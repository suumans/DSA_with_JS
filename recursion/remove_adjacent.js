function removeAdjDup(inputString) {
    let result = ""

    for (let i = 0; i < inputString.length; i++) {
        if (i === inputString.length -1 || inputString[i] !== inputString[i+1]) {
            result += inputString[i]
        }
    }
    return result
}


/**
 * Recursively removes adjacent duplicate characters from a given input string.
 * inputString - The input string to remove adjacent duplicates from.
 * string - The modified string without adjacent duplicates.
 */
function recursiveRAD(inputString) {
    // Base case: if the input string has length 1 or less, return it as is.
    if (inputString.length <= 1) {
        return inputString;
    }

    // Check if the first two characters are the same.
    if (inputString[0] === inputString[1]) {
        // If they are the same, recursively call the function with the substring starting from the second character.
        return recursiveRAD(inputString.substring(1));
    } else {
        // If they are different, concatenate the first character with the result of the recursive call on the substring starting from the second character.
        return inputString[0] + recursiveRAD(inputString.substring(1));
    }
}


/**
 * Recursively removes both adjacent duplicate characters from a given input string.
 * inputString - The input string to remove adjacent duplicates from.
 * string - The modified string without adjacent duplicates.
 */
function removeAdjacentDuplicates(inputString) {
    // Base case: if the input string has length 1 or less, return it as is.
    if (inputString.length <= 1) {
        return inputString;
    }

    // Check if the first two characters are the same.
    if (inputString[0] === inputString[1]) {
        // If they are the same, recursively call the function with the substring starting from the third character.
        return removeAdjacentDuplicates(inputString.substring(2));
    } else {
        // If they are different, concatenate the first character with the result of the recursive call on the substring starting from the second character.
        return inputString[0] + removeAdjacentDuplicates(inputString.substring(1));
    }
}