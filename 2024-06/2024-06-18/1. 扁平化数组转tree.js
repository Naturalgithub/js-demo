const array = [
    { id: 1, pid: 0, name: "菜单1" },
    { id: 2, pid: 0, name: "菜单2" },
    { id: 3, pid: 0, name: "菜单3" },
    { id: 4, pid: 1, name: "菜单4" },
    { id: 5, pid: 1, name: "菜单5" },
    { id: 6, pid: 2, name: "菜单6" },
    { id: 7, pid: 4, name: "菜单7" },
    { id: 8, pid: 7, name: "菜单8" },
    { id: 9, pid: 8, name: "菜单9" },
    { id: 10, pid: 9, name: "菜单10" },
    { id: 11, pid: 10, name: "菜单11" },
    { id: 12, pid: 11, name: "菜单12" },
    { id: 13, pid: 12, name: "菜单13" },
    { id: 14, pid: 13, name: "菜单14" },
];

function buildTree (arr, pid) {
    let result = []

    for (let item of arr) {
        if(item.pid === pid) {
            const temp = item

            const children = buildTree(arr, item.id)
            if(children && children.length) {
                temp.children = children
            }

            result.push(temp)
        }
    }

    return result
}







// function buildTree(arr, pid = null) {
//      return arr.reduce((cur, next) => {
//         if (next.pid === pid) {
//             const children = buildTree(arr, next.id)
//             if (children.length) {
//                 next.children = children
//             }
//             return cur.concat(next)
//         }

//         return cur
//     }, [])
// }


// console.log(buildTree(array))
// const buildTree = (arr, pid = null) => {
//     const temp = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].pid === pid) {
//             const child = { ...arr[i] }

//             const children = buildTree(arr, arr[i].id)

//             if (children.length) {
//                 child.children = children
//             }

//             temp.push(child)
//         }
//     }

//     return temp
// }

// function buildTree (arr, pid = null) {
//     const temp = []

//     for (let item of ar/Users/yuanquanke/Code/study/js-demo/2024-06-18/2. tree转扁平化数组.jsr) {
//         if (item.pid === pid) {
//             const children = buildTree(arr, item.id)

//             if (children.length) {
//                 item.children = children
//             }

//             console.log(temp,4444)
//             temp.push(item)
//         }

//     }

//     console.log(temp)
//     return temp
// }


const result = buildTree(array, 0)
console.log("结果123：", result)
