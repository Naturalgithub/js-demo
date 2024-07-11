var arr = [4, 1, 6, 9, 3, 2, 8, 7]

//  [4, 1, 2, 9, 3, 6, 8, 7]

//  [4, 1, 2, 3, 9, 6, 8, 7]

function swap(arr, a, b) {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

function quickSort(arr, begin, end) {
    if (begin >= end - 1) return
    let left = begin
    let right = end

    do {
        do left++; while (left < right && arr[left] < arr[begin])
        do right--; while (left < right && arr[right] > arr[begin])
        if (left < right) swap(arr, left, right)
    } while (left < right)

    let swapPoint = right
    swap(arr, swapPoint, begin)

    quickSort(arr, begin, swapPoint)
    quickSort(arr, swapPoint + 1, end)
}



function startQuickSort(arr) {
    quickSort(arr, 0, arr.length - 1)
}

startQuickSort(arr)

console.log(arr)
