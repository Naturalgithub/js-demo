<!-- 浏览器的空闲时间 -->

<!-- requestIdleCallback -->

<!-- 60FPS 16.6ms -->

<!-- 一帧执行做什么时间 -->
1.处理用户的事件，就是 event 例如 click，input change，scroll 等等
2.执行定时器任务
3.执行 requestAnimationFrame 回调
4.执行dom的回流与重绘
5.计算更新图层的绘制指令
6.绘制指令合并主线程 如果有空余时间会执行 requestIdleCallback 回调

<!-- 第二种情况 -->
1.没有任务执行，浏览器会有 50ms 空闲时间，这个时间段也会执行 requestIdleCallback 回调

requestIdleCallback 回调函数接收两个参数，第一个参数是回调函数，第二个参数是配置对象，配置对象中有一个 timeout 属性，表示如果主线程没有空闲时间，那么等待多少毫秒后，强制执行回调函数

react 相关人员调研 requestIdleCallback，有机会是 20ms 执行的 polyfill
react16 postMessage + requestAnimationFrame
setimeTout 4m 嵌套大于 4 层
react MessageChannel 实现了 requestIdeCallback 的 polyfill；；
