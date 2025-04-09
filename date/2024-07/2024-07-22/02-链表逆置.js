function Node(value) {
	this.value = value
	this.next = null
}

let a = new Node('1')
let b = new Node('2')
let c = new Node('3')
let d = new Node('4')
let e = new Node('5')

a.next = b
b.next = c
c.next = d
d.next = e
e.next = null



// function nizhi (root) {
// 	if (root.next === null) {
// 		return root
// 	}

// 	let temp = nizhi(root.next)
// 	root.next.next = root
// 	root.next = null
// 	return temp
// }



function bianLink (root) {
	if (root === null || root.value === null) return
	console.log(root.value)
	bianLink(root.next)
}


// 双指针逆置
function nizhi (root) { 
	if (root === null && root.next === null) return root
	let pre = null
	let cur = root

	while (cur != null) {
		let temp = cur.next
		cur.next = pre
		pre = cur
		cur = temp
	}
	return pre
}


bianLink(nizhi(a))
// console.log(nizhi(a))