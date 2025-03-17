// 用 promise 不用 callback 的写法
const mysql = require("mysql2/promise");

async function test() {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        port: "3307",
        database: "company",
        password: "123456",
    });

    const [results] = await connection.query(
        `SELECT * FROM department`,
    );
    console.log(results)

    // 最后关闭链接
    connection.end();
}

test()


