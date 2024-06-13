
/**
 * Recursively calculates the length of a given string.
 * string - The input string to calculate the length of.
 */
function recursiveLength(string) {
    // Base case: if the input string is empty, return 0.
    if (string.length == 0) {
        return 0;
    } else {
        // Recursively calculate the length by adding 1 to the length of the substring starting from the second character.
        return 1 + recursiveLength(string.substring(1));
    }
}