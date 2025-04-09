// 给出前序中序还原二叉树，并写出后序遍历

// 中序遍历：FCG A DBE
// 后序： FG C D EB A

// 前序遍历：A CFGBDE

let zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e']
// fgc deb a
let hou = ['f', 'g', 'c', 'd', 'e', 'b', 'a']


function Node (value) {
	this.value = value
	this.left = null
	this.right = null
}

function f1 (zhong, hou) {
	if (hou === null || zhong === null || hou.length === 0 || zhong.length === 0 || zhong.length !== hou.length) return null
	let root = new Node(hou[hou.length - 1])	

	let zhongLeaderIndex = zhong.findIndex(item => item === hou[hou.length - 1])

	let zhongLeft = zhong.slice(0, zhongLeaderIndex)
	let zhongRight = zhong.slice(zhongLeaderIndex + 1, zhong.length)

	let houLeft = hou.slice(0, zhongLeaderIndex)
	let houRight = hou.slice(zhongLeaderIndex, hou.length - 1)

	root.left = f1(zhongLeft, houLeft)
	root.right =  f1(zhongRight, houRight)

	return root
}


let r1 = f1(zhong, hou)

// console.log(r1)
// 前序遍历

function bianLink (root) {
	if(root === null || root.value === null) return 
	console.log(root.value)
	bianLink(root.left)
	bianLink(root.right)
}

bianLink(r1)





