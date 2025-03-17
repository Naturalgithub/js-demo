// 预编译 sql 的语句 
// 以后不要使用connection.query 而要使用 connection.execute
const mysql = require('mysql2/promise')

async function test(id) {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        port: "3307",
        database: "company",
        password: "123456",
        multipleStatements: true // 可以运行多行 sql 语句
    });

    const [results] = await connection.execute(
        `SELECT * FROM department where id = ?`,
        [id]);
    console.log(results)

    // 最后关闭链接
    connection.end();
}

test(3)