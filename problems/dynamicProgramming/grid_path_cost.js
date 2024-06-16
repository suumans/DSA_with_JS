function maxPathCost(grid, row = 0, col = 0, memo = {}) {

    // Return the cache result
    const position = row + ',' + col

    if(position in memo) return memo[position]

    if (row >= grid.length || col >= grid[0].length /* || grid[row][col] === x */ ) return -Infinity

    // Check if you have arrived at given position
    if(row === grid.length - 1 && col === grid[0].length - 1) return grid[row][col]

    //memo[position] = maxPathCost(grid, row + 1, col, memo) + maxPathCost(grid, row, col + 1, memo)

    const rightPath = counuPaths(grid, row + 1, col, memo)
    const downPath = counuPaths(grid, row, col + 1, memo)

    memo[position] = grid[row][col] + Math.max(rightPath + downPath)  // 

    return memo[position]
}