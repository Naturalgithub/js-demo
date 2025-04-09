// let arr = new Array(10).fill(0).map(item => new Array(10).fill(0))
// console.log(arr)

// 二维拓扑结构
 function Node (value) {
 	this.value = value
 	this.neighbor = []
 }


let a = new Node('A')
let b = new Node('B')
let c = new Node('C')
let d = new Node('D')
let e = new Node('E')
let f = new Node('F')

Array.prototype.push.call(a.neighbor, b, c, f)

Array.prototype.push.call(b.neighbor, d, e)



console.log(a)