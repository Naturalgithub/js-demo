let arr = [4, 1, 6, 9, 3, 2, 8, 7]

function exchange (arr, a, b) {
	const temp = arr[a]
	arr[a] = arr[b]
	arr[b] = temp
}

function compare (a, b) {
	return a > b
}

function sort (arr) {
	for (let j = 0; j < arr.length; j++) {
		for (let i = 0; i < arr.length - 1 - j; i ++) {
			if(compare(arr[i], arr[i + 1])) {
				exchange(arr, i, i + 1)
			}
		}
	}
	
}


// test 第一圈 期望 [4, 1, 6,  3, 2, 8, 7，9]
sort(arr)

console.log(arr)

