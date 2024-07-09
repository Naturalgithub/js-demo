const array = [
    [1, 2], [3, 4, 5],
    [[6, 7, [8, 9, 10]], [11, 12, 13], [14], [15, 16]], 17
]


// function flattenArray(arr) {
//     return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
// }

// function flattenArray (arr) {
// 	let result = []

// 	for (let item of arr) {
// 		if (Array.isArray(item)) {
// 			result = result.concat(flattenArray(item))
// 		}else{
// 			console.log(item)	
// 			result.push(item)
// 		}


// 	}

// 	return result
// }


// function flattenArray (arr) {
// 	return arr.reduce((cur, next) => {
// 		return cur = Array.isArray(next) ? cur.concat(flattenArray(next)) : cur.concat(next)
// 	}, [])
// }


















console.log(flattenArray(array));