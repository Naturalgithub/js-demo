function Node (value) {
	this.value = value
	this.next = null
}

var node1 = new Node(1)
var node2 = new Node(2)
var node3 = new Node(3)
var node4 = new Node(4)
var node5 = new Node(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = null

// 不知道循环长度用 while 但是一定要 break
function bianlink (root) {
	let temp = root
	while (true) {
		if (!!temp) {
			console.log(root.value)
		} else {
			console.log('循环结束')
			break
		 }
		temp = temp.next 
	}
}

bianlink(node1)
