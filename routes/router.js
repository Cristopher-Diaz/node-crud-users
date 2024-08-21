const express = require('express')
const router = express.Router()

const connection = require('../database/db')
// console.log(connection)

router.get('/', (req, res) => {
    connection.query('SELECT * FROM users', (error, result) => {
        if(error) {
            throw error
        } else { 
            res.send(result)
        }
        
    })
})
router.get('/contact', (req, res) => {
    res.send('Contacto')
})

module.exports = router