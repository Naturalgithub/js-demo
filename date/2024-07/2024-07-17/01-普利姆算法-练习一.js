let max = 999999
let pointSet = []
let distance = [
    [0, 4, 7, max, max],
    [4, 0, 8, 6, max],
    [7, 8, 0, 5, max],
    [max, 6, 5, 0, 7],
    [max, max, max, 7, 0]
]

function Node(value) {
    this.value = value
    this.neighbor = []
}

let a = new Node('A')
let b = new Node('B')
let c = new Node('C')
let d = new Node('D')
let e = new Node('E')

pointSet.push(a)
pointSet.push(b)
pointSet.push(c)
pointSet.push(d)
pointSet.push(e)


function getIndex(value, pointSet) {
    for (let i = 0; i < pointSet.length; i++) {
        if (value === pointSet[i].value) return i
    }
    return -1
}

function getMinDisNode(pointSet, distance, nowPointSet) {
    let fromNode = null // 线段起点
    let minDisNode = null	// 线段终点
    let minDis = max // 最小距离


    for (let i = 0; i < nowPointSet.length; i++) {
        let nowPointIndex = getIndex(nowPointSet[i].value, pointSet)
        for (let j = 0; j < distance[nowPointIndex].length; j++) {
            let thisNode = pointSet[j]
            // console.log(thisNode, 777)
            if (nowPointSet.indexOf(thisNode) < 0
                && distance[nowPointIndex][j] < minDis
            ) {
                fromNode = nowPointSet[i]
                minDisNode = thisNode
                minDis = distance[nowPointIndex][j]
            }
        }

    }

    fromNode.neighbor.push(minDisNode)
    minDisNode.neighbor.push(fromNode)

    return minDisNode

}

function prim(pointSet, distance, start) {
    let nowPointSet = []
    nowPointSet.push(start)

    while (true) {
        let minDisNode = getMinDisNode(pointSet, distance, nowPointSet)
        nowPointSet.push(minDisNode)

        if (pointSet.length === nowPointSet.length) {
            break
        }
    }
}

prim(pointSet, distance, pointSet[2])

console.log(pointSet)
