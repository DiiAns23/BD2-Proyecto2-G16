const mysql = require('mysql2');
require('dotenv').config();

const conn = mysql.createConnection({
    host: process.env.HOST_MYSQL_DB,
    port: process.env.PORT_MYSQL_DB,
    user: process.env.USER_MYSQL_DB,
    password: process.env.PASSWORD_MYSQL_DB,
    database: process.env.DB_MYSQL_DB,
    multipleStatements: true
});

conn.connect(function (err) {
    if (err) {
        console.log(`Base de datos no conectada, ' + ${err.stack}`);
        return;
    }
    console.log('Conexion a la base de datos de MySQL establecida');
});

const execute = async function consultar(query) {
    try {
        const [result] = await conn.promise().execute(query);
        return {query, result};
    } catch (err) {
        return {err}
    }
};

module.exports = {
    execute
}