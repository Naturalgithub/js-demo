// 广度优先

function Node (value) {
	this.value = value
	this.left = null
	this.right = null
}


let a = new Node('A')
let b = new Node('B')
let c = new Node('C')
let d = new Node('D')
let e = new Node('E')
let f = new	Node('F')
let g = new Node('G')


a.left = c
c.left = f
c.right = g
a.right = b
b.left = d
b.right = e


function f1 (matchList, target) {

	if(matchList === null || matchList.length === 0) return false

	let  arr = []

	for (let i = 0; i < matchList.length; ++i) {
		if(matchList[i] === null) return false
		let flag = matchList[i].value === target 

		if(flag) return true
		else {
			arr.push(matchList[i].left)
			arr.push(matchList[i].right)
		}
	}	
	
	return f1(arr, target)


}

let bool  = f1([a], 'H')
console.log(bool)