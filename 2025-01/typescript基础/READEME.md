nodemon: 用于检测文件的变化
<!-- "dev": "nodemon --watch src -e ts --exec ts-node src/index.ts" -->
nodemon --watch src -e ts --exec ts-node src/index.ts
nodemon 监听 src下面 文件变化 
-e ts 只监听 ts 文件变化  extension 扩展名
--exec 执行的命令 ts-node 命令  tsnode 执行 src/index.ts


ts-node: 将ts代码在内存中完成编译，同时完成运行

pnpm i -g ts-node

 <!-- ts-node <文件名>  -->

