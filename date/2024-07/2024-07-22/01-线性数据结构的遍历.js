function Node(value) {
    this.value = value;
    this.next = null
}

let a = new Node('a')
let b = new Node('b')
let c = new Node('c')
let d = new Node('d')
let e = new Node('e')


a.next = b
b.next = c
c.next = d
d.next = e
e.next = null


// function bianli (root1) {
//     let root = root1
//     while (root && root.value !== null) {
//         console.log(root.value)
//         root = root.next
//     }

// }

// bianli(a)


// function digui (root) {
//     if (root === null || root.value === null) return
//     console.log(root.value)
//     digui(root.next)   
// }

// digui(a)

function bianLink(root) {
    let temp = root
    while (true) {
        if (!!temp) {
            console.log(temp.value)
            temp = temp.next
        } else {
            console.log('遍历结束')
            break
        }
    }
}

bianLink(a)