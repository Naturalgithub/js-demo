// 给出前序中序还原二叉树，并写出后序遍历

// 中序遍历：FCG A DBE
// 后序： FG C D EB A

// 前序遍历：A CFGBDE

let zhong = ['f', 'c', 'g', 'a', 'd', 'b', 'e']
// fgc deb a
let hou = ['f', 'g', 'c', 'd', 'e', 'b', 'a']

function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

function f1(zhong, hou) {
    // 严谨性判断
    if (zhong === null || hou === null || zhong.length === 0 || hou.length === 0 || zhong.length !== hou.length) return null
    let root = new Node(hou[hou.length - 1])

    let zhongRootIndex = zhong.findIndex(str => str === root.value)
    let zhongLeft = zhong.slice(0, zhongRootIndex)
    let zhongRight = zhong.slice(zhongRootIndex + 1, zhong.length)

    // const midIndex = [hou.length - 1] / 2
    // let houLeft = hou.slice(0, midIndex)
    // let houRight = hou.slice(midIndex, hou.length - 1)

    // 以这个为标准
    let houLeft = hou.slice(0, zhongRootIndex)
    let houRight = hou.slice(zhongRootIndex, hou.length - 1)

    root.left = f1(zhongLeft, houLeft)
    root.right = f1(zhongRight, houRight)

    return root
}


const result = f1(zhong, hou)
console.log(result)


