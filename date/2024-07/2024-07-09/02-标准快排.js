var arr = [4, 1, 6, 9, 3, 2, 8, 7]

function swap (arr, a, b) {
	let temp = arr[a]
	arr[a] = arr[b]
	arr[b] = temp
}

function quickSort(arr, begin, end) {
	if (begin >= end - 1) return
	let left = begin
	let right = end

	do {
		let leader = arr[begin]
		do left ++; while (left < right && arr[left] < leader)
		do right --; while (right > left && arr[right] > leader)
		if (left < right) swap(arr, left, right)
	} while (left < right)	

	// 这一行有什么意义啊
	let swapPoint = left == right ? right - 1 : right
	swap(arr, swapPoint, begin)
	quickSort(arr, begin, swapPoint)
	quickSort(arr, swapPoint + 1, end)
}


function quickSort2(arr) {
	quickSort(arr, 0, arr.length - 1)
}

quickSort2(arr)
console.log(arr)	