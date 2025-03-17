(function(modules){
    var moduleExports = {}; // 缓存模块的导出结果

    // 相当于运行函数，得到模块导出结果
    function __webpack_require(moduleId){

        if (moduleExports[moduleId]) { // 检查是否有缓存
            return moduleExports[moduleId];
        }

        var func = moduleExports[moduleId] // 得到模块的函数
        var module = {
            exports: {}
        }

        // 运行模块代码
       func(module, module.exports, __webpack_require);
        moduleExports[moduleId] = module.exports; // 缓存
        return module.exports
    }

    // 执行入口模块
    return __webpack_require("./src/index.js");
})({
    "./src/a.js": function (module, exports) {
        eval("console.log(\"module a\")\nmodule.exports = \"a\";\n //# sourceURL=webpack:///./src/a.js")
    },
    "./src/index.js": function (module, exports, __webpack_require) {
        eval("console.log(\"index module\")\nvar a = __webpack_require(\"./src/a.js\")\na.abc();\nconsole.log(a)\n //# sourceURL=webpack:///./src/index.js")

    }
})