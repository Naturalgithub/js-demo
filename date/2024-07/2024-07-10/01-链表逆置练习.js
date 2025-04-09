function Node(value) {
    this.value = value
    this.next = null
}

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)


node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = null


// 1. 递归
function reverse (root) {
	if (root.next == null) {
		return root
	}
	let temp = reverse(root.next)
	root.next.next = root
	root.next = null
	return temp
}

// function binkNum (root) {
// 	if(root.next == null) {
// 		console.log(root.value)
// 		return root
// 	}
// 	const temp = binkNum(root.next)
// 	console.log(root.value)
// 	return temp
// }

function digui (root) {
	if (root === null ) return
	console.log(root.value)	
	digui(root.next)
}

// reverse(node5)
const result = reverse(node1)
console.log(result)

digui(result)

// console.log(reverse(node1))

// 2. 双指针

// function reverse (root) {
// 	let pre = null
// 	let cur = root

// 	while (cur) {
// 		let temp = cur.next
// 		cur.next = pre
// 		pre = cur
// 		cur = temp
// 	}
// 	return pre
// }


// console.log(reverse(node1))



