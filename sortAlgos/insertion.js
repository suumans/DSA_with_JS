function insertionSort(arr) {
    // start from the second position
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]
        let i = i - 1
        while (j >= 0 && arr[j] < current) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = current
    }

    return arr
}

let array = [8, 5, 2, 9, 5, 6, 3]
insertionSort(array)