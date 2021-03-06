const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mydb'
})

con.connect((err) => {
  if (err) throw err;
  console.log('Connected')

  let sql = "INSERT INTO customers (name, addres) VALUES ('Company Inc', 'Highway 37')"
  // varios Registros

  let sqlValues = "INSERT INTO customers (name, addres) VALUES ?"
  let values = [
    ['John', 'Highway 71'],
    ['Peter', 'Lowstreet 4'],
    ['Amy', 'Apple st 652'],
    ['Hannah', 'Mountain 21'],
    ['Michael', 'Valley 345'],
    ['Sandy', 'Ocean blvd 2'],
    ['Betty', 'Green Grass 1'],
    ['Richard', 'Sky st 331'],
    ['Susan', 'One way 98'],
    ['Vicky', 'Yellow Garden 2'],
    ['Ben', 'Park Lane 38'],
    ['William', 'Central st 954'],
    ['Chuck', 'Main Road 989'],
    ['Viola', 'Sideway 1633']
  ]
  con.query(sqlValues, [values], (error, result) => {
    if(error) throw error;
    console.log('Number of records inserted: ' + result.affectedRows)
  })
})