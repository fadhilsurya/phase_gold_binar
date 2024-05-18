const express = require('express')
const router = express.Router()
const { Create } = require('../../handler/user.handler')

router.post('/register', Create)

module.exports = router
