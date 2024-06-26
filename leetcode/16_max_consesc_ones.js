let longestOnes = function (nums, k) {
    let left = 0
    let zeroCount = 0
    let maxLen = 0

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {   // count the number of zeros
            zeroCount++
        }

        while (zeroCount > k) {
            if (nums[left] === 0) {    // remove the leftmost zero
                zeroCount--
            }
            left++
        }

        maxLen = Math.max(maxLen, right - left + 1)   // update the max length
    }

    return maxLen
}