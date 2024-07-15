/*
 * @Author: james_ke 3318615021@qq.com
 * @Date: 2024-07-15 18:10:45
 * @LastEditors: james_ke 3318615021@qq.com
 * @LastEditTime: 2024-07-15 18:25:38
 * @FilePath: \js-demo\2024-07\2024-07-15\11-代码实现二叉树的深度优先搜索.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
a.right = b
b.left = d
b.right = e

function f1 (root, target) {
	if (root === null) return false
	if (root.value === target) return true

	let right = f1(root.right)
	let left = f1(root.left)


	return right || left
}
console.log(a)

console.log(f1(a,"F"))
