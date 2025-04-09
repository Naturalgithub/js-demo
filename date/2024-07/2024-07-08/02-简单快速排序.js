let arr = [4, 1, 6, 9, 3, 2, 8, 7]

function quickSort(arr) {
	if (arr == null || arr.length == 0) return []
  	// 先随便找一个 leader、
	let leader = arr[0]
	// 小的放左边
	let left = []
	// 大的放右边
	let right =[]

	// 一定从第二个开始排序，因为leader 已经排除出来了，如果从 0 开始，那么就会死循环
	for (let i = 1; i < arr.length; i++) {
		if(arr[i] < leader) left.push(arr[i])
		else right.push(arr[i])
	}

	// 递归
	right = quickSort(right)
	left = quickSort(left)

	// 左 ➕ leader + 右
	left.push(leader)
	return left.concat(right)
}

console.log(quickSort(arr))