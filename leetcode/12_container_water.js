let maxArea = function (height) {
    let maxWater = 0
    let left = 0
    let right = height.length - 1

    while(left < right) {  // loop until left pointer is less than right pointer
        let currentHeight = math.min(height[left], height[right])  // get the smaller height
        let currentWidth = right - left  // get the current width
        let currentWater = currentHeight * currentWidth  // calculate the current water

        maxWater = math.max(maxWater, currentWater)  // update the max water

        // move the pointer with smaller height

        if (height[left] < height[right]) {  // if left height is less than right height
            left++  // move the left pointer
        } else {
            right--  // move the right pointer
        }
    }

    return maxWater
}