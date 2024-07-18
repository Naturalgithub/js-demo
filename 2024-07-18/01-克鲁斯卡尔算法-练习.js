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

function canLink(resultList, tempBegin, tempEnd) {
    let beginIn = null;
    let endIn = null
    for (let i = 0; i < resultList.length; i++) {
        if (resultList[i].indexOf(tempBegin) > -1) {
            beginIn = resultList[i]
        }
        if (resultList[i].indexOf(tempEnd) > -1) {
            endIn = resultList[i]
        }
    }

    // 两个点都是新的点 (都不在任何部落里) --- 可以连接,产生新的部落
    // begin 在 A 部落, end 没有部落 -- A 部落扩张成一个村庄
    // end 在 A 部落, begin 没有部落 -- A 部落扩张成一个村庄
    // begin 在 A 部落, end 在 B 部落 -- A 部落和B部落合并成一个部落
    // begin 和 end 在同一个部落, --- 不可以连接
    if (beginIn !== null && endIn !== null && beginIn === endIn) {
        return false
    }
    return true
}

function link(resultList, tempBegin, tempEnd) {
    let beginIn = null;
    let endIn = null;
    for (let i = 0; i < resultList.length; i++) {
        if (resultList[i].indexOf(tempBegin) !== -1) {
            beginIn = resultList[i]
        }
        if (resultList[i].indexOf(tempEnd) !== -1) {
            endIn = resultList[i]
        }
    }

    if (beginIn == null && endIn == null) {
        // 没有关系，联合成一个部落
        let newArr = [];
        newArr.push(tempBegin);
        newArr.push(tempEnd);
        resultList.push(newArr)
    } else if (beginIn !== null && endIn == null) { // begin 在 A 部落, end 没有部落 --- A部落扩张一个村庄
        beginIn.push(tempEnd)
    } else if (beginIn == null && endIn !== null) { // end 在 A 部落, begin 没有部落 --- A部落扩张一个村庄
        endIn.push(tempBegin)
    } else if (beginIn !== null && endIn !== null && beginIn !== endIn) { // begin 在 A 部落, end 在 B 部落 --- A 部落和B部落合并成一个部落
        let allIn = beginIn.concat(endIn)
        let needRemove = resultList.indexOf(endIn)

        resultList.splice(needRemove, 1)
        needRemove = resultList.indexOf(beginIn)
        resultList.splice(needRemove, 1)

        resultList.push(allIn)
    }

    tempBegin.neighbor.push(tempEnd)
    tempEnd.neighbor.push(tempBegin)
}


function kruskal(pointSet, distance) {
    let resultList = []

    while (true) {
        let minDis = max;
        let begin = null
        let end = null

        for (let i = 0; i < distance.length; i++) {
            for (let j = 0; j < distance[i].length; j++) {
                let tempBegin = pointSet[i]  // 从 A 开始
                let tempEnd = pointSet[j] //  A - E

                if (i !== j
                    && distance[i][j] < minDis
                    && canLink(resultList, tempBegin, tempEnd)
                ) {
                    minDis = distance[i][j];
                    begin = tempBegin
                    end = tempEnd
                    console.log(begin, end, 99)
                }
            }
        }

        link(resultList, begin, end)
        console.log(resultList, 88 )
        if (resultList.length == 1 && resultList[0].length == pointSet.length) { // 只存在一个部落
            break
        }
    }

}

kruskal(pointSet, distance)
console.log(pointSet, 999)
