const express = require('express')
const router = express.Router()
const sendMsg = require("../getSentResult")
const { getErr, asyncHandler } = require("../getSentResult")
const adminServ = require("../../services/adminService")
const cryptor = require("../../utils/crypt");


router.post("/login", asyncHandler(async (req, res) => {
    const result = await adminServ.login(req.body.loginId, req.body.loginPwd)
    if (result) {
        let value = result.id
        value = cryptor.encrypt(value.toString())
        // 登录成功
        req.session.loginUser = result
        console.log(req.session)

        // res.header("set-cookie", `token=${result.id}; path=/; domain=localhost; max-age=3600; httponly`)
        res.cookie("token", value, {
            maxAge: 3600 * 1000, path: '/', domain: "localhost",
            httpOnly: true,
            sign: true
        })
        res.header("authorization", value)
    }
    return result
}))

module.exports = router