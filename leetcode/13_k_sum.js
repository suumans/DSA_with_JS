/* let maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b)

    let left = 0
    let operations = 0

    while(left < right) {
        const sum = nums[left] + nums[right]

        if (sum === k) {
            left++
            right++
        } else if (sum < k) {
            left++
        }else{
            right++
        }
    }
    return operations
}
*/

// Method 2
let maxOperations = function(nums, k) {
    let map = new Map()
    let operations = 0

    for (const num of nums) {
        compliment = k - num  // 5 - 3 = 2

        if (map.get(compliment) > 0) {  // 2 > 0
            operations++
            map.set(compliment, map.get(compliment) - 1)  
        } else {
            map.set(num, (map.get(num) || 0) + 1)
        }
    }

    return operations
}