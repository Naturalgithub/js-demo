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
let f = new Node('F')
let g = new Node('G')

a.left = c
c.left = f
c.right = g
a.right = b
b.left = d
b.right = e

 
function deepSearch (root, target) {
	if (root === null || root.value === null) return false
	if(root.value === target) return true	
	else {
		let left = deepSearch(root.left, target)
		let right = deepSearch(root.right, target)
		return f1 || f2
	}	
}

console.log(deepSearch(a, 'H'),23)
