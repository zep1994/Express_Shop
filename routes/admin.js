const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/add-coach', (req, res, next) => {
    res.sendFile(path.join(__dirname, "views", "add-coach.html"))
})

module.exports = router