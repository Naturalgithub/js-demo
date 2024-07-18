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
let g = new	Node('G')

a.left = c
c.left = f
c.right = g
a.right = b
b.left = d
b.right = e

function f1 (root, target) {
	if (root === null) return false
	if (root.value == target) return true

	let right = f1(root.right, target)
	let left = f1(root.left, target)

		return right || left
}

console.log(f1(a,"B"))
