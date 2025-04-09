let arr = [4, 1, 6, 9, 3, 2, 8, 7]

// 1,3,2  4  6,9,8,7

// left = [1,3,2]
// right = [6,9,8,7]

// left = [8,7]
// right = [9]

// left = [7]
// right = [8,9]

// 1 3 2
// left = [3,2]

// left = [2]
// right = [3]


function compare(a, b) {
    return a > b
}

function quickSort(arr) {
    if (arr.length === 0 || arr === null) return []

    let leader = arr[0]
    let left = []
    let right = []

    for (let i = 1; i < arr.length; i++) {
        if (compare(arr[i], leader)) right.push(arr[i])
        else left.push(arr[i])
    }

    // console.log(left, 777)
    right = quickSort(right)
    left = quickSort(left)

    // console.log(right, 666)
    left.push(leader)
    return left.concat(right)
}

console.log(quickSort(arr))