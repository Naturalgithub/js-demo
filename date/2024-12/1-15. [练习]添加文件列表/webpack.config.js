var FileListPlugin = require("./plugins/FileListPlugin")
const MyFileListPlugin = require("./plugins/MyFileListPlugin")

module.exports = {
    mode: "development",
    devtool: "source-map",
    // watch: true,
    plugins: [
        // new FileListPlugin("文件列表.md")
        new MyFileListPlugin("文件列表123.txt")
    ]
}
