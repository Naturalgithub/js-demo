const PENDING = "pending"
const FULFILLED = "fulfilled"
const REJECTED = "rejected"


/** 
 * description: 运行一个微任务队列
 * 把传递的函数放到微任务队列中
 * param {*} callback
 * return {*}
 */
function runMicroTask(callback) {
    // 判断是否为node环境
    if (typeof process !== "undefined" && typeof process.nextTick !== "undefined") {
        process.nextTick(callback)
    }
    else if (typeof MutationObserver !== "undefined") {
        const p = document.createElement('p')
        setTimeout(() => { console.log(1) })
        const observer = new MutationObserver(() => {
            console.log("变化了")
        })
        observer.observe(p, { childList: true })
        p.innerHTML = "hello world"
    }
    else {
        setTimeout(callback, 0)
    }

    // MutationObserver
    const observer = new MutationObserver(callback)
    console.log("变化了")

}

https://oapi.dingtalk.com/robot/send?access_token=f78976cc0a346f2a157f9207f8fbf8e876b513ca7e3811feb6345f084909d652
class MyPromise {
    /**
     * description: 创建一个 Promise
     * param {*} executor
     * return {*}
     */
    constructor(executor) {
        this._status = PENDING// 状态
        this._value = undefined // 数据
        this._handlers = [] // 处理函数形成的队列
        try {
            executor(this._resolve.bind(this), this._reject.bind(this))
        }
        catch (err) {
            this._reject(err)
        }
    }

   
    /** 
     * description: 向处理队列添加一个函数
     * param {Function} executor
     * param {String} state
     * return {*}
     */
    _pushHandlers(executor, state, resolve, reject) {
        this._handlers.push({
            executor,
            state,
            resolve,
            reject
        })
    }

    /** 
     * description: Promise A+ 规范 then
     * param {*} onFulfilled
     * param {*} onRejected
     * return {*}
     */
    then(onFulfilled, onRejected) {
        return new MyPromise((resolve, reject) => { 
            this._pushHandlers(onFulfilled, FULFILLED, resolve, reject)
            this._pushHandlers(onRejected, REJECTED, resolve, reject)
        })
    }

    _changeStatus(status, value) {
        if (this._status !== PENDING) {
            return
        }
        this._status = status
        this._value = value
    }https://www.yuque.com/dashboard/notes

    /**
     * description: 标记当前任务完成
     * return {any} data 任务完成的相关数据
     */
    _resolve(data) {
        console.log(this._status)
        this._changeStatus(FULFILLED, data)
    }

    /**
     * description: 任务失败的相关数据
     * param {*} data
     * return {*}
     */
    _reject(reason) {
        this._changeStatus(REJECTED, reason)
    }
}



// const pro = new MyPromise((resolve, reject) => {
//     // resolve("成功")
//     // reject("失败")
//     // reject("失败")
//     // throw new Error("失败")
// })


// console.log(pro)


runMicroTask(()=>{
    console.log("微任务")
})



console.log("start")







