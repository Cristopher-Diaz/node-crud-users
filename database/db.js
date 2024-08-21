const mysql = require('mysql')
// Variables db 
require('dotenv').config({path: './.env'})
const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE
})

connection.connect(error => {
  if(error) {
    console.log('Error de conexión a la DB:', error)
    return
  }
  console.log('Se ha realzado la conexión de forma correcta!')
})

module.exports = connection