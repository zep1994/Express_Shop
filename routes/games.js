const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/games', (req, res, next) => {
    res.send('<h1>Game List</h1>')
})

module.exports = router