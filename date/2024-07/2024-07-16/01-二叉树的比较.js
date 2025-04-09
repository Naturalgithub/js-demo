function Node (value) {
	this.value = value
	this.left = null
	this.right = null
}

let a1 = new Node('a')
let b1 = new Node('b')
let c1 = new Node('c')
let d1 = new Node('d')
let e1 = new Node('e')
let f1 = new Node('f')
let g1 = new Node('g')


a1.left = c1
c1.left = f1
c1.right = g1
a1.right = b1
b1.left = d1
b1.right = e1


let a2 = new Node('a')
let b2 = new Node('b')
let c2 = new Node('c')
let d2 = new Node('d')
let e2 = new Node('e')
let f2 = new Node('f')
let g2 = new Node('g')

a2.left = c2
c2.left = f2
c2.right = g2
a2.right = b2
b2.left = d2
b2.right = e2

// console.log(a1, a2)
function compareTree (root1, root2) {
	// 是同一颗树
	if (root1 === root2) return true
	// 其中一个为空，另一个不为空
	if (root1 === null && root2 !== null || root2 === null && root1 !== null) return false
	// 相同位置，值不相等
	if (root1.value !== root2.value) return false 
	
	let right = compareTree(root1.right, root2.right)	// 判断左子树是否相等
	let left  = compareTree(root1.left, root2.left)		// 判断右子树是否相等

	return right && left  // 必须左右子树相等才算相等
}

console.log(compareTree(a1, a2), 'test')









