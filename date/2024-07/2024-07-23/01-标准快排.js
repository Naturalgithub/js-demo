let arr = [4, 1, 6, 9, 3, 2, 8, 7]

function swap (arr, a, b) {
	let temp = arr[a]
	arr[a] = arr[b]
	arr[b] = temp
}


function quickSort (arr, begin, end) {
	// end - 1 是因为已经先 right -- 了
	if (begin >= end - 1 ) return
	let leader = arr[begin]
	let left = begin
	let right = end

	do {
		do left ++; while (left < right &&  leader > arr[left])
		do right --; while (left < right && leader < arr[right])
		if (left < right) swap(arr, left, right)
	} while (left < right)
	
	let swapPoint = right === left ? right - 1 : right
	swap(arr, begin, swapPoint)

	quickSort(arr, begin, swapPoint)
	quickSort(arr, swapPoint + 1, end)

}

quickSort(arr, 0, arr.length - 1)

console.log(arr)