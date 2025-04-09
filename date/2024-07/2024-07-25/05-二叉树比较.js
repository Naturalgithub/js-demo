function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

let a1 = new Node('A')
let b1 = new Node('B')
let c1 = new Node('C')
let d1 = new Node('D')
let e1 = new Node('E')
let f1 = new Node('F')
let g1 = new Node('G')


a1.left = c1
c1.left = f1
c1.right = g1
a1.right = b1
b1.left = d1
b1.right = e1


let a2 = new Node('A')
let b2 = new Node('B')
let c2 = new Node('H')
let d2 = new Node('D')
let e2 = new Node('E')
let f2 = new Node('F')
let g2 = new Node('G')


a2.left = c2
c2.left = f2
c2.right = g2
a2.right = b2
b2.left = d2
// b2.right = e2


// redux  vNode root
// create: {type: '创建'，_vNode:c2, now: c1}
// delete： {type: '删除'，_vNode:c2, now: null}
// update：{type:'更新'，_vNode:c2, now: c1}
// patch : {type:'更新'，_vNode:c2, now: c1}

function compareTree(root, root2, diffList = []) {
    if (root === root2) return diffList
    if (root === null && root2 !== null) {
        diffList.push({ type: '创建', _vNode: null, now: root2 })
    } else if (root !== null && root2 === null) {
        diffList.push({ type: '删除', _vNode: root, now: null })
    } else if (root.value !== root2.value) {
        diffList.push({ type: '更新', _vNode: root, now: root2 })
        compareTree(root.left, root2.left, diffList)
        compareTree(root.right, root2.right, diffList)
    } else {
        compareTree(root.left, root2.left, diffList)
        compareTree(root.right, root2.right, diffList)
    }

    return diffList
    // let left = compareTree(root.left, root2.left) || compareTree(root.left, root2.right)

    // let right = compareTree(root.right, root2.right) || compareTree(root.right, root2.left)

    // return left && right
}



console.log(compareTree(a1, a2, []))













