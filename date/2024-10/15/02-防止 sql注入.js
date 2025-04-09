// 防止 sql 注入  比如 拼接sql
// sql 注入 用户通过注入 sql 语句到最终查询中,导致最终查询与结果不同 
const mysql = require('mysql2/promise')

async function test() {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        port: "3307",
        database: "company",
        password: "123456",
        multipleStatements: true // 可以运行多行 sql 语句
    });

    const [results] = await connection.query(
        `SELECT * FROM department`,
    );
    console.log(results)

    // 最后关闭链接
    connection.end();
}

test()