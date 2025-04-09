let arr = [4, 1, 6, 9, 3, 2, 8, 7]


function quickSort (arr) {
	// 递归出口
	if (arr.length === 0 || arr === null) return []

	// leder
	let	leader = arr[0]
	// 小的放左边
	let left = []
	// 大的防右边
	let right = []

	// 因为已经声明 leader i 初始值 为 1
	for (let i = 1; i < arr.length; i++) {
		if(arr[i] < leader) left.push(arr[i])
		else right.push(arr[i])
	}

	right = quickSort(right)
	left = quickSort(left)

	// 左边 + leader + 右边
	left.push(leader)
	return left.concat(right)
}


// 没有递归测试结果应该是 1 3 2 4 6 9 8 7
// console.log(quickSort(arr))

// 正确答案
// console.log(quickSort(arr))
