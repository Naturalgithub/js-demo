require("./model/relation")

const adminServer = require("./services/adminService")
const studentService = require("./services/studentService")

// adminServer.login(
//     "a8888",
//     "123"
// ).then(res => {
//     console.log("🐒🐒 ~ file: index.js:6 ~ res:", res)
// })

// adminServer.getAdminById(3).then(res => {
//     console.log("🐒🐒 ~ file: index.js:10 ~ res:", res)
// })


studentService.getStudents(1, 3).then(res => {
    console.log(res)
})
