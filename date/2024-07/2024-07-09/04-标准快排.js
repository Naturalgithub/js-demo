var arr = [4, 1, 6, 9, 3, 2, 8, 7]

function swap (arr, a, b) {
	let temp = arr[a]
	arr[a] = arr[b]
	arr[b] = temp
}



function quickSort (arr, begin, end) {
	// 递归结束条件，双指针即将交换 return
	if ( begin >= end - 1) return
	let left = begin
	let right = end

	do { 
		let leader = arr[begin]
		do left ++ ; while (left < right && arr[left] < leader)
		do right -- ; while (left < right && arr[right] > leader)
		// 指针停止 交换左右指针的指
		// do while 会 先执行一次 判断left < right;
		if (left < right) swap(arr, right, left)
	} while (left < right)

	// 找极点，
	let swapPoint = right
	// 交换 leader，
	swap(arr, begin, swapPoint)

	// 递归两边
	quickSort(arr, begin, swapPoint)
	quickSort(arr, swapPoint + 1, end)
}

function quickSortFn (arr) {
	quickSort(arr, 0, arr.length - 1)
}

quickSortFn(arr)
console.log(arr)	