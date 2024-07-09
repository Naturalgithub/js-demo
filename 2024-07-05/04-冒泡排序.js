let arrConst = [4, 1, 6, 9, 3, 2, 8, 7]
// 1. 最笨的办法 找一个删一个
// 返回最大
// function findMax(arr,desc = true) {
// 	return Math[desc ? 'min' : 'max'].apply(null, arr)
// }

// // console.log(findMax(arr))
// function sort(arr, desc) {
// 	const temp = []
// 	let rest = [...arr]
// 	for (let i = 0; i < arr.length; i++) {
// 		let max = findMax(rest, desc)
// 		temp[i] = max
// 		let index = rest.findIndex(item => item === max)
// 		rest.splice(index, 1)
// 	}

// 	return temp
// }


// 2. [1, 23, 4, 5, 6, 7, 8, 9].sort((a, b) => a - b)
// 3. [1, 23, 4, 5, 6, 7, 8, 9].sort()
// 4. [1, 23, 4, 5, 6, 7, 8, 9].toSorted()
// 5. [1, 23, 4, 5, 6, 7, 8, 9].toSorted()


// 6. 冒泡排序 - 无限版
// 排序的本质的比较和交换
// function compare (a, b) {
// 	return a > b ? true : false
// }

// function exchange(arrTemp, aIndex, bIndex) {
// 	let temp  = arrTemp[aIndex]
// 	arrTemp[aIndex] = arrTemp[bIndex]
// 	arrTemp[bIndex] = temp
// }

// function sort (arr) {
// 	for (let j = 0; j < arr.length; j++) {
// 		for (let i = 0; i < arr.length - 1; i++){
// 			if (compare(arr[i], arr[i + 1])) {
// 				exchange(arr, i, i + 1)
// 			}
// 		}
// 	}
// }

// sort(arrConst)
// // 冒泡排序
// console.log(arrConst)


// 7. 冒泡排序，少圈比较 优化时间复杂度
function compare (a, b) {
	return a > b
}

function exchange (arr, aIndex, bIndex) {
	let temp = arr[aIndex]
	arr[aIndex] = arr[bIndex]
	arr[bIndex] = temp
}

function sort (arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			if (compare(arr[j], arr[j + 1])) {
				exchange(arr, j, j + 1)
			}
		}
	}
}


// console.time()
sort(arrConst)
console.log(arrConst)
// console.timeEnd()


