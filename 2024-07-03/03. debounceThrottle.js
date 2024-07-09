// 防抖和节流

// 防抖
function debounce(func, wait) {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func(...args)
        }, wait)
    }
}

function throttle(func, wait) {
    let timer
    return function (...rest) {
        if (timer) return
        timer = setTimeout(() => {
            func(...rest)
            clearTimeout(timer)
            timer = null
        })
    }

}

function test(a, b) {
    console.log(666, a, b)
}

const d123 = debounce(test, 1000)
const t123 = throttle(test, 1000)


d123(1, 2)
d123(1, 2)
d123(1, 2)
d123(1, 2)
d123(1, 2)
d123(1, 2)
t123(1, 2)

// d()
// d()
// d()
// d()

// t()
// t()
// t()
// t()
// t()
// t()
// t()

