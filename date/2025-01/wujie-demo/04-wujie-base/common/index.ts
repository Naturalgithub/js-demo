import axios from "axios";

// 将公共的模块提到一个 common 文件中去
export const a = axios.get('xxx')
export const b = 1

//  pnpm -F main add common
// common 我想在上一级目录找

