const { CONNREFUSED } = require('dns');
const mysql = require('mysql')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
})

con.connect((err) => {
  if (err) throw err;
  console.log('connected');
  let sql = 'CREATE TABLE customers (name VARCHAR(25) , addres VARCHAR(255))';
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log('Table created' + result)
  })
})