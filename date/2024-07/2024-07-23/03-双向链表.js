function Node(value) {
	this.value = value
	this.pre = null
	this.next = null
}


let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)


node1.next = node2
node2.pre = node1
node2.next = node3
node3.pre = node2
node3.next = node4
node4.pre = node3
node4.next = node5
node5.pre = node4

function bianlink(root, str) {
	if (root === null || root.value === null) return

	if(str === 'asc') {
		console.log(root.value)
		bianlink(root.next, str)
	} else {
		bianlink(root.pre)
		console.log(root.value)
	}

		// bianlink(root.next)

}

bianlink(node3)
bianlink(node3.next,'asc')

