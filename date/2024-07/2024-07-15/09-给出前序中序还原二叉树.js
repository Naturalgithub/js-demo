// 给出前序中序还原二叉树，并写出后序遍历

// 前序遍历：A CFGBDE
// 中序遍历：FCG A DBE

// 后序： FGCDEBA

let qian = ['a', 'c', 'f', 'g', 'b', 'd', 'e']
let zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e']

function Node(value) {
	this.value = value
	this.left = null
	this.right = null
}

function f1(qian, zhong) {
	// 严谨性判断
	if (qian === null || zhong === null || qian.length === 0 || zhong.length === 0 || qian.length !== zhong.length) return null
	const root = new Node(qian[0])
	let leaderZhongIndex = zhong.findIndex(item => item == root.value)
	let zhongLeft = zhong.slice(0, leaderZhongIndex)
	let zhongRight = zhong.slice(leaderZhongIndex + 1, zhong.length)
	let qianLeft = qian.slice(1, leaderZhongIndex + 1)
	let qianRight = qian.slice(leaderZhongIndex + 1, qian.length)

	root.right = f1(qianRight, zhongRight)
	root.left = f1(qianLeft, zhongLeft)

	return root
	// console.log(leaderZhongIndex)
	// let zhongLeft = zhong.slice()
	// let qianRight = qian.slice()

}


const result = f1(qian, zhong)
console.log(result)
