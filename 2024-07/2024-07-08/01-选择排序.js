// 越混乱越适合快排选择，越有规律越适合冒泡
let arrConst = [4, 1, 6, 9, 3, 2, 8, 7]

// 排序的本质 就是比较和交换
function compare (a, b) {
	return a < b
}

function exchange (arr, aIndex, bIndex) {
	let temp 	= arr[aIndex]
	arr[aIndex] = arr[bIndex]
	arr[bIndex] = temp
}


function sort (arr) {
	for (let j = 0; j < arr.length; j++) {
		let maxIndex = 0;
		for (let i = 0; i < arr.length - j; i++) {
			if (compare(arr[maxIndex], arr[i])) {
				maxIndex = i
			}
		}
		exchange(arr, maxIndex, arr.length - 1 - j)	
	}

}

sort(arrConst)

console.log(arrConst)