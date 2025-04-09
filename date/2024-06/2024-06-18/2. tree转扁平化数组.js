const treeArray = [
    {
        "id": 1,
        "pid": 0,
        "name": "菜单1",
        "children": [
            {
                "id": 4,
                "pid": 1,
                "name": "菜单4",
                "children": [
                    {
                        "id": 7,
                        "pid": 4,
                        "name": "菜单7",
                        "children": [
                            {
                                "id": 8,
                                "pid": 7,
                                "name": "菜单8"
                            }
                        ]
                    }
                ]
            },
            {
                "id": 5,
                "pid": 1,
                "name": "菜单5"
            }
        ]
    },
    {
        "id": 2,
        "pid": 0,
        "name": "菜单2",
        "children": [
            {
                "id": 6,
                "pid": 2,
                "name": "菜单6"
            }
        ]
    },
    {
        "id": 3,
        "pid": 0,
        "name": "菜单3"
    }
]

function floatToTree (arr) {
    let temp = []

    for (let item of arr) {
        console.log(item)
        if(item.children && item.children.length) {
            temp = temp.concat(floatToTree(item.children))
        }

        temp.push(item)
    }


    return temp


}

























// function floatToTree(arr) {
//     let temp = []

//     for (let item of arr) {
//         if (item.children && item.children.length) temp = temp.concat(floatToTree(item.children))
//         temp.push(item)
//     }

//     return temp.map(child => ({
//         id: child.id,    //123
//         pid: child.pid,   //12323
//         name: child.name   // 123
//     }))
// }


const result = floatToTree(treeArray)


console.log(result.map(item => {
    if(item.children) delete item.children
    return item
}))














