module.exports = class MyFileListPlugin {
  constructor(filename = "filelist.txt") {
    this.filename = filename
  }

  apply(compiler) {
    compiler.hooks.emit.tap("MyFileListPlugin", (complation, callback) => {
        // 在生成资源并输出到目录后执行
        const fileList = [];
        for (const filename in complation.assets) {
            const size = complation.assets[filename].size()
            fileList.push({
                size: size/1000 + 'kb',
                filename: filename
            })
        }
        let str = fileList.map(file => `${file.filename} ${file.size}`).join("\n")
        complation.assets[this.filename] = {
            source() {
                return str
            },
            size() {
                return str.length;
            }
        }

    })
  }
}