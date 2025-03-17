requestIdleCallback((time) => {
    // 剩余时间
    console.log(time.timeRemaining())
})