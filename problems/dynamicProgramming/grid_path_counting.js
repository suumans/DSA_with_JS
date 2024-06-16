function counuPaths(grid, row = 0, col = 0, memo = {}) {

    const position = row + ',' + col

    if(position in memo) return memo[position]

    if (row >= grid.length || col >= grid[0].length || grid[row][col] === x) return 0

    // Check if you have arrived at given position
    if(row === grid.length - 1 && col === grid[0].length - 1) return 1

    // Return the cache result
    if (position in memo) return memo[position]

    memo[position] = counuPaths(grid, row + 1, col, memo) + counuPaths(grid, row, col + 1, memo)

    // const rightPath = counuPaths(grid, row + 1, col, memo)
    // const downPath = counuPaths(grid, row, col + 1, memo)

    // memo[position] = rightPath + downPath

    return memo[position]
}