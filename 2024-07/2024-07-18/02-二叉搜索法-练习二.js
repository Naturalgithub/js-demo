// 问题：有一万个数，写一个方法，进行查找。查找给定的水，返回存在还是不存在。
// 要求：尽可能的性能好。

let arr = []
for (let i = 0; i < 10000; i++) {
	arr[i] = Math.floor(Math.random() * 10000)
}

let num = 0

function search (arr, target) {
	for (let i = 0; i < arr.length; i ++) {
		num ++
		if (arr[i] === target) return true
	}
	return false
}

console.log(search(arr, 1000))
console.log(num)