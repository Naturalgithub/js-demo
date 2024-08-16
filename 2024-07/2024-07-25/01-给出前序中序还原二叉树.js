// 给出前序中序还原二叉树，并写出后序遍历

// 前序遍历：A CFG BDE
// 中序遍历：FCG A DBE

// 后序： FGC DEB A

function Node(value) {
	this.value = value
	this.left = null
	this.right = null
}


let qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e']
let zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e']


function f1(qian, zhong) {
	if (qian === null || zhong === null || qian.length === 0 || zhong.length === 0 || qian.length !== zhong.length) return null
	// 先确定根节点	
	let root = new Node(qian[0])
	let zhongLeaderIndex = zhong.findIndex(item => item === qian[0])

	let qianLeft = qian.slice(1, zhongLeaderIndex + 1)
	let qianRight = qian.slice(zhongLeaderIndex + 1, qian.length)
	let zhongLeft = zhong.slice(0, zhongLeaderIndex)
	let zhongRight = zhong.slice(zhongLeaderIndex + 1, zhong.length)


	// console.log(qianLeft,qianRight,zhongLeft,zhongRight)
	root.left = f1(qianLeft, zhongLeft)
	root.right = f1(qianRight, zhongRight)
 // f1(qianRight, zhongRight)
	return root
}

let r1 = f1(qian, zhong)

// 后序遍历

function bianLink (root) {
	if(root === null || root.value === null) return 
	bianLink(root.left)
	bianLink(root.right)
	console.log(root.value)
}

bianLink(r1)
