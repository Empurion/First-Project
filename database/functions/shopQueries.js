const mysql = require('mysql');


db = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        multipleStatements: true,
        database: 'empernet_shops',
        charset: 'utf8mb4'
});


async function createShop(){

}