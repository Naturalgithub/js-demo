// 这只青蛙一次可以跳 1 级台阶，2 级台阶，或者 n 级台阶
// 请问这只青蛙，跳上 n 级台阶有多少种方法？

function fib(n) {
	if (n <= 0) return -1
	if (n === 1) return 1
	if (n === 2) return 2


	let result = 0
	for (let i = 1; i < n; i++) {
		result += fib(n - i)
	}


	return result + 1
}



console.log(fib(3), 999)


// f9 + f8 + f


// f2  f2+f1  3 4
// +
// f1	f2  2 
// 	+
// 	f1 1 


// f3  f4