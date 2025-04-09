import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 这种是原始方法不建议 推荐用官方封装好的 wujie-vue3
// import {setupApp} from 'wujie'
// setupApp({ name: "唯一id", url: "子应用地址", exec: true, el: "容器", sync: true })

import Wujie from 'wujie-vue3' // 引入对应的框架 版本
const { preloadApp } = Wujie

const app = createApp(App)
app
    .use(Wujie) 
    .mount('#app')

// 预加载子应用
// preloadApp({ name: "vue3", url: "http://127.0.0.1:5174/", exec: true })
// preloadApp({ name: "react", url: "http://127.0.0.1:5175/", exec: true })

