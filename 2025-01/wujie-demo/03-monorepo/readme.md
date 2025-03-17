npm init vue

npm init vite

<!-- 单跑一个项目 -->
pnpm --filter react-demo dev

<!-- 子模块复用技术 -->
> 给 main 添加 common 模块
<!-- 前置条件 -->
<!-- pnpm add common --link-workspace-packages=true -->
<!-- 或者 vim ～/.npmrc   添加 link-workspace-packages=true -->
pnpm -F main add common --workspace-root=common

