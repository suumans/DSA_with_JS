// [1, 2, 3, 4, 3, 5, 3, 6]
// key = 2


function countKeyInArray(array, key) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === key) { // Check if the current element is equal to the key
            count++; // If it is, increment the count
        }
    }

    return count;
}

function recursiveCountKeyInArray(array, key, index = 0) {
    if (index >= array.length) {
        return 0
    }

    // check if the current element is equal to the key, and if so, increment the count by 1
    // Otherwise, recursively call the function with the next index and add the result to the count
    return (array[index] === key ? 1 : 0) + recursiveCountKeyInArray(array, key, index + 1)
}


function recursiveCountKeyInArray(array, key, index = 0) {
    // Base case: if the index is equal to or greater than the array length, return 0
    if (index >= array.length) {
        return 0;
    }

    let count = 0;

    if (array[index] === key) { // Check if the current element is equal to the key
        count = 1; // Increment count if the current element matches the key
    }

    // Call the function with the next index and add the result to the count
    return count + recursiveCountKeyInArray(array, key, index + 1);
}

console.log(recursiveCountKeyInArray([1, 2, 3, 4, 3, 5, 3, 6], 3));