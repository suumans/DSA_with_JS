function nonAdjacent(nums, i = 0, memo) {
    if (i in memo) return memo[i]
    if (i >= nums.length) return 0
    
    const skip = nonAdjacent(nums, i + 1, memo)
    const take = nums[i] + nonAdjacent(nums, i + 2, memo)

    memo[i] = Math.max(skip, take)
    return memo[i]
}