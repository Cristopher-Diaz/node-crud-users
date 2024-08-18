const express = require('express')
const app = express()
app.set('view engine', 'ejs')

require('dotenv').config({path: './.env'})
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server up http://localhost:${PORT}`)
})