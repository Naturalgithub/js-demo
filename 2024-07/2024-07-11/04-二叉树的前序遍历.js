function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}


let a = new Node('A')
let b = new Node('B')
let c = new Node('C')
let d = new Node('D')
let e = new Node('E')
let f = new Node('F')
let g = new Node('G')

a.left = c
a.right = b
c.left = f
c.right = g
b.left = d
b.right = e

function f1(root) {
    if (root == null) return
    console.log(root.value)
    f1(root.left)
    f1(root.right)
}

f1(a)