const path = require("path")
module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.js",
    // externals:{
    //     jquery:"$",
    //     lodash:"_"
    // }
    state: {
        color: true,
        module: false,
        hash: false,
        builtAt: false
    }
}