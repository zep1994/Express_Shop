const express = require('express')
const path = require('path')

const rootDir = require('../util/path')

const router = express.Router()

router.get('/add-coach', (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "add-coach.html"))
})

module.exports = router