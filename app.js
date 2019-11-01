const express = require('express')

const app = express()

const landing = require('./routes/landing') 
const games = require('./routes/games')
const adminRoute = require('./routes/admin')


app.use(landing)
app.use(games)

//Will execute if req or callbacks are done
app.use('/', (req, res) => {
    res.send("<h1>404</h1>")
})

app.listen(3000)