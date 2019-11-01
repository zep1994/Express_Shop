const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const landing = require('./routes/landing') 
const games = require('./routes/games')
const adminRoutes = require('./routes/admin')
const rootDir = require('./util/path')


app.use(bodyParser.urlencoded({ extended: false }))

app.use(landing)
app.use(adminRoutes)
app.use(games)

//Will execute if req or callbacks are done
app.use('/', (req, res) => {
    res.sendFile(path.join(rootDir, "views", '404.html')) 
})

app.listen(3000)