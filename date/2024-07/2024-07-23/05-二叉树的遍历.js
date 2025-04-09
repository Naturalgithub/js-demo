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


// 前序遍历
// function bianLink (root) {
// 	if (root === null || root.value === null) return
// 	console.log(root.value)
// 	bianLink(root.left)
// 	bianLink(root.right)
// }

// bianLink(a)

// 中序遍历
function bianLink (root) {
	if (root === null || root.value === null) return
	bianLink(root.left)
	console.log(root.value)
	bianLink(root.right)
}

bianLink(a)
