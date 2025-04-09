// let arr = new Array(4).fill(0).map(() => new Array(4).fill(0))

// // for (let i = 0; i < arr.length; i++) {
// //     arr[i] = new Array(4)
// // }

// console.log(arr)

// 二维拓扑结构
function Node(value) {
    this.value = value
    this.neighbors = []
}

let a = new Node('a')
let b = new Node('b')
let c = new Node('c')
let d = new Node('d')
let e = new Node('e')
let f = new Node('f')

Array.prototype.push.call(a.neighbors, b, c, f)
Array.prototype.push.call(b.neighbors, d, e)


console.log(a)
