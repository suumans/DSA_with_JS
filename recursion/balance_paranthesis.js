// Input = ["(", "(", ")", ")", "(", ")"]

function isBalancedParenthesis(array, startIndex = 0, currentIndex = 0) {
    if (currentIndex === array.length) { // Base case: if the current index is equal to the length of the array, return true if current index is 0
        return currentIndex == 0;
    }

    if (currentIndex < 0) { // Base case: if the current index is less than 0, return false
        return false;
    }

    if (array[startIndex] == "(") { // If the current element is an opening parenthesis
        return isBalancedParenthesis(array, startIndex + 1, currentIndex + 1); // call the function with the next index and increment the current index by 1
    } else if (array[startIndex] == ")") { // If the current element is a closing parenthesis
        return isBalancedParenthesis(array, startIndex + 1, currentIndex - 1); // call the function with the next index and decrement the current index by 1
    } else { // If the current element is neither an opening nor closing parenthesis
        return false; // Return false
    }
}