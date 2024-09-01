const express = require('express')
const app = express()
const path = require('path')
const expressLayouts = require('express-ejs-layouts')

// Variables desde el .env
require('dotenv').config({path: './.env'})
const PORT = process.env.PORT || 3000

// Declaramos ejs como motor de plantillas
app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', require('./routes/router'))


app.listen(PORT, () => {
    console.log(`Server up http://localhost:${PORT}`)
})