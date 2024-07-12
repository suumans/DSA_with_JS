let grid = [[3,2,1],[1,7,6],[2,7,7]]

// let cols = []

// for (let j = 0; j < grid.length; j++) {
//     for (let i = 0; i < grid.length; i++) {
//         cols.push(grid[i][j])
//     }
// }
// console.log(cols)



let equalPairs = function (grid) {
    const n = grid.length
    const rowMap = new Map()

    for (let i = 0; i < n; i++) {
        const rowStr = grid[i].join('')  // convert the row to a string
        rowMap.set(rowStr,(rowMap.get(rowStr) || 0) + 1)  // if the row string already exists, increment the count
    }

    let count = 0

    for (let j = 0; j < n; j++) {
        const colArr = []
        for (let i = 0; i < n; i++) {
            col.push(grid[i][j])  // push the column into the column array
        }

        const colStr = colArr.join(',')  // convert the column to a string
        if (rowMap.has(colStr)) {
            count += rowMap.get(colStr)  // if the column string already exists, increment the count
        }
    }

    return count
}