let productExceptSelf = function(nums){
    let length  = nums.length
    let left = new Array(length).fill(1)
    let right = new Array(length).fill(1)

    let answer = new Array(length)

    // Left side array
    for (let i = 1; i < length; i++) {
        left[i] = nums[i - 1] * left[i - 1]
    }
    console.log(left)

    // right side array
    for (let i = length - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1]
    }
    console.log(right)

    for (let i = 0; i < length; i++) {
        answer[i] = left[i] * right[i]
    }

    return answer
}


console.log(productExceptSelf([1,2,3,4]))



// nums: [1, 2, 3, 4]

// before left: [1, 1, 1, 1]
//before right: [1, 1, 1, 1]

// after left: [1, 1, 2, 6] after right: [24, 12, 4, 1]
// answer: [24, 12, 8, 6]