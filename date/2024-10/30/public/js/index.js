// console.log(7777)

// // 简单请求
// (
//     async function () {
//         const data = await fetch("http://localhost:9527/api/student")
//         const res1 =await data.json()
//         console.log(res1)
//     }
// )()


// // 预检请求
// (
//     async function () {
//         const data = await fetch("http://localhost:9527/api/student", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             credentials:"include" // omit 不带cookie same-origin 只有同源带cookie  inclued 始终都带
//         })
//         const res1 =await data.json()
//         console.log(res1)
//     }
// )()
// 

fetch("/api/admin/login", {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        loginId: "adc",
        loginPwd: "123"
    })
})
    .then(res => res.json())
    .then(res => {
        console.log(res,123123)
    })

getStu.onclick = function () {
    console.log(1231)
    fetch("/api/student",).then(res => res.json()).then(res => {
        console.log(res)
    })
}
