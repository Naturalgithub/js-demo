let arr = [4, 1, 6, 9, 3, 2, 8, 7]


function swap(arr, a, b) {
	let temp = arr[a]
	arr[a] = arr[b]
	arr[b] = temp
}

function quickSort(arr, begin, end) {
	if (begin >= end - 1) return
	let left = begin
	let right = end
}


quickSort(arr, 0, arr.length - 1)

console.log(arr)
