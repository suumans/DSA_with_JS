// madam
// ada
// d -> true


function isPalindrome(string) {
    // Base case: if the string has length 1 or less, it's a palindrome.
    if (string.length <= 1) {
        return true;
    } else if (string[0] === string[string.length - 1]) {
        // Check if the first and last characters are the same, then recursively check the substring without those characters.
        return isPalindrome(string.substring(1, string.length - 1));
    } else {
        // If the first and last characters are not the same, it's not a palindrome.
        return false;
    }
}