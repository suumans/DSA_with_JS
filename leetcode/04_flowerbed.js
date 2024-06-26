
[1, 0, 0, 0, 1]
[1, 0, 1, 0, 0]

let canPlaceFlowers = function (flowerbed, n) {
    let count = 0
    for ( let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 ) {
            let isLeftEmpty = (i === 0 ||flowerbed[i - 1] === 0) // check if left is empty
            let isRightEmpty = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0) // check if right is empty

            if (isLeftEmpty && isRightEmpty) {
                flowerBed[i] = 1
                count++
                if (count >= n) {
                    return true
                }
            }
        }
    }

    return count >= n
}