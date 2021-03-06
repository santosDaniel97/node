const mysql = require('mysql')
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb',
})


con.connect((err) => {
  if (err) throw err;
  console.log('connected')
  // tabela já existe
  let sqlCreate = "CREATE TABLE  customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  // USar o alter table
  let sqlAlter = 'ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY';
  con.query(sqlAlter,(err, result) => {
    if (err) throw err;
    console.log('Table created ' + result)
  })
})