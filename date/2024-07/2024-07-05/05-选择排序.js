// 任何一种排序算法，都没有优劣之分，只有是否适合之分。选择排序，就是每次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完。选择排序是不稳定的排序方法（指相等的元素可能会改变原来的顺序）。
// 越混乱越适合快排选择，越有规律越适合冒泡
let arrConst = [4, 1, 6, 9, 3, 2, 8, 7]

function compare (a, b) {
	return a > b
}

const c = [1, 2]

function exchange (arr, aIndex, bIndex){
	let temp  = arr[aIndex]
	arr[aIndex] = arr[bIndex]
	arr[bIndex] = temp
}


function sort (arr) {
	for (let i = 0; i < arr.length; i++) {
		let maxIndex = 0

		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (compare(arr[maxIndex], arr[j])) {
				maxIndex = j
			}
		}

		exchange(arr, maxIndex, arr.length - 1 - i)
	}

}

sort(arrConst)

console.log(arrConst,89)
