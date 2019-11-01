const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/', (req, res, next) => {
    //res.sendFile(path.join(__dirname, "views", "landing.html"))
    res.send('<h1>Landing</h1>')
})

module.exports = router