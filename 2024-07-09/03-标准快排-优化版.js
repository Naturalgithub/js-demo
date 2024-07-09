var arr = [4, 1, 6, 9, 3, 2, 8, 7]

function swap (arr, a, b) {
	let temp = arr[a]
	arr[a] = arr[b]
	arr[b] = temp
}


function quickSort (arr, begin, end) {
	// 递归结束条件，数组只有两项 指针不可交换
	if (begin >= end - 1) return

	let left = begin
	let right = end
	function flag () { return left < right }

	do {
		let leader = arr[begin]
		do left ++; 	while (flag() 	&&  arr[left]  < leader)
		do right --; 	while (flag() 	&&  arr[right] > leader)
		if (flag()) swap(arr, left, right)
	} while (flag())
	
	// 找到极点，由上可得 指针交换后的 right 就是 极点
	let swapPoint = right == left ? right - 1  : right
	// 将开始点，与极点交换
	swap(arr, begin, swapPoint)
	// 递归 分别找到两边的极点
	quickSort(arr, begin, swapPoint)
	quickSort(arr, swapPoint + 1, end)
}

function quickSort2 (arr) {
	quickSort(arr, 0, arr.length - 1)
}

quickSort2(arr)

console.log(arr)