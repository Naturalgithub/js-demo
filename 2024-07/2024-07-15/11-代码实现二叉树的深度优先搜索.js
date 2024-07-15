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
let f = new	Node('F')
let g = new	Node('G')

a.left = c
c.left = f
c.right = g

// function f1 ()