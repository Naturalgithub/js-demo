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



function nizhi (root) {
	if(!root.next || !root) return root

	let pre = null
	let cur = root

	while (cur) {
		let temp = cur.next
		cur.next = pre
		pre = cur
		cur = temp
	}

	return pre
}


console.log(nizhi(node1))