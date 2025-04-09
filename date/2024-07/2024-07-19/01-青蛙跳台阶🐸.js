// 一只青蛙，一次只能跳一级台阶，或者跳两级台阶 如果跳 第 n 级 有多少种方法

// n 1  1
// n 2  2
// n 3  3

// 1 1 1
// 1 2
// 2 1

// n 3 5

// 1 1 1 1

// 1 2 1

// 2 1 1

// 1 1 2

// 2 2


function jump (n) {
	if (n <= 0) return -1
	if (n === 1) return 1
	if (n === 2) return 2
	return jump(n - 1) + jump(n - 2)
}

console.log(jump(4))


