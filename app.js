const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const landing = require('./routes/landing') 
const games = require('./routes/games')
const adminRoutes = require('./routes/admin')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(landing)
app.use(adminRoutes)
app.use(games)

//Will execute if req or callbacks are done
app.use('/', (req, res) => {
    res.send("<h1>404</h1>")
})

app.listen(3000)