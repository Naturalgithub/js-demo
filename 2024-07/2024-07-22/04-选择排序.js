let arr = [4, 1, 6, 9, 3, 2, 8, 7]

function compare (a, b) {
	return a > b
}

function exchange(arr, a, b) {
	let temp = arr[a]
	arr[a] = arr[b]
	arr[b] = temp
}

function changeSort (arr) {
	for (let i = 0; i < arr.length; i ++) {
		let maxIndex = 0
		for (let j = 1; j < arr.length - i; j ++) {
			if (compare(arr[maxIndex], arr[j])){
				maxIndex = j
			}
		}
		exchange(arr, maxIndex, arr.length - i - 1)
	}
}



changeSort(arr)

console.log(arr,123)