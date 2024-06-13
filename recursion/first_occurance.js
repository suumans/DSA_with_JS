// arr = [3, 4, 1, 8, 1, 7];
// findMe = 1;
// currentIndex = 0;
// output = 2
// if not found return -1


//iterative solution
function firstOcc(arr, findMe, currentIndex) {
    while (currentIndex < arr.length) {
        if (arr[currentIndex] === findMe) {
            return currentIndex
        }
        currentIndex++
    }
    return -1
}


//recursive solution
function recursiveFirstOcc(arr, findMe, currentIndex) {
    if (arr[currentIndex] === findMe) {
        return currentIndex
    }
    if (currentIndex === arr.length) {
        return -1
    }
    return recursiveFirstOcc(arr, findMe, currentIndex + 1)
}
