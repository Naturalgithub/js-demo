const array = [
    { id: 5, name: '菜单8' },
    { id: 4, name: '菜单7' },
    { id: 4, name: '菜单4' },
    { id: 5, name: '菜单5' },
    { id: 1, name: '菜单1' },
    { id: 2, name: '菜单6' },
    { id: 1, name: '菜单2' },
    { id: 3, name: '菜单3' }
]


// 数组对象去重 2
function uniqueArray (arr) {
	return arr.reduce((cur, next) =>  cur.findIndex(item => item.id === next.id) > -1 ? cur : cur.concat(next), [])
}






















// 数组对象去重 2

console.log("anwser2: ",uniqueArray(array))