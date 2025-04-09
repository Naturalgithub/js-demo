let arr = [4, 1, 6, 9, 3, 2, 8, 7, 11, 12]

function compare (a, b) {
	return a < b
}

function exchange (arr, a, b) {
	const temp = arr[a]
	arr[a] = arr[b]
	arr[b] = temp
}

function sort (arr) {
	for (let j = 0; j < arr.length; j++) {
		let maxIndex = 0
		for (let i = 0; i < arr.length - j; i++) {
			if(compare(arr[maxIndex], arr[i])) {
				maxIndex = i
			}
		}
		exchange(arr, maxIndex, arr.length - 1 - j)
	}
}

// Test 先把第一圈最大值，排到最后 期望：[4, 1, 6, 3, 2, 8, 7, 9 ]
sort(arr)
console.log(arr)	