const express = require('express')
const app = express()

// Variables desde el .env
require('dotenv').config({path: './.env'})
const PORT = process.env.PORT || 3000

// Declaramos ejs como motor de plantillas
app.set('view engine', 'ejs')

app.use('/', require('./routes/router'))


app.listen(PORT, () => {
    console.log(`Server up http://localhost:${PORT}`)
})