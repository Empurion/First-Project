const mysql = require('mysql');


db = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        multipleStatements: true,
        database: 'empernet_auctions',
        charset: 'utf8mb4'
});


async function createAuction(){

}