var arr = [4, 1, 6, 9, 3, 2, 8, 7]

function swap (arr, a, b) {
	let temp = arr[a]
	arr[a] = arr[b]
	arr[b] = temp
}

function quickSort2(arr, begin, end) {
	console.log('top', begin, end,arr[end])
	if (begin >= end - 1) return
	let left = begin
	let right = end

	// do while 循环 永远先执行 一次， 左闭右开原则
	// 大do while 一直循环，直到指针没有交合
	do {
		// arr[begin] 是leader 左指针循环，直到发现 arr[left] 小于leader 且 左右指针没有交合
		do left ++; while (left < right && arr[left] < arr[begin])
		// arr[begin] 是leader 右指针循环，直到发现 arr[right] 大于leader 且 左右指针没有交合
		do right --; while (right > left && arr[right] > arr[begin])
		// 如果左右指针没有交合，那么就交换停止时的数值
		if (left < right) swap(arr, left, right)
			console.log(left,right,'left:right')
	} while (left < right)

	console.log(left,right,'left:right2')

	let swapPoint = left == right ? right - 1 : right
	console.log(swapPoint,'swapPoint')

	// console.log(arr)	
	swap(arr, begin, swapPoint)
	console.log('beginend',arr, arr[begin] ,arr[swapPoint])
	// 左边 begin 递归到 鸡点
	quickSort2(arr, begin, swapPoint)
	// 右边 从极点 + 1 递归到 end
	// quickSort2(arr, swapPoint + 1, end)
}

function quickSort(arr) {
	quickSort2(arr, 0, arr.length - 1)
}

quickSort(arr)
// console.log(arr,222)	