const arrItem = [
	[1, 2], [3, 4, 5],
	[[6, 7, [8, 9, 10]],[11, 12, 13], [14], [15, 16]],17
]

// console.log(arr.flat(Infinity))


// function flattenArray (arr) {
// 	let result = []
// 	for (let i = 0; i < arr.length; ++i) {
// 		if(Array.isArray(arr[i])){
// 			result.push(...flattenArray(arr[i]))
// 		} else {
// 			result.push(arr[i])
// 			console.log(result)	
// 		}
// 	}

// 	return result
// }


// function flattenArray (arr) {
// 	const result = []
// 	for (let i = 0; i < arr.length; ++i) {
// 		if(typeof arr[i] === 'number'){
// 			const tmp = flattenArray(arr[i])
// 			result.push(arr[i])
// 			console.log(result)	
// 		} else {
// 			const tmp = flattenArray(arr[i])
// 			console.log(tmp)	
// 			result.push(...tmp)
// 		}
// 	}

// 	return result
// }

function flattenArray(arr){
 const temp = arr.reduce((cur,next)=>{
		if (Array.isArray(next)) {
			return cur.concat(...flattenArray(next))
		} else {
			return cur.concat(next)
		}
	},[])
 return temp
}

console.log(flattenArray(arrItem),'arr')

