const express = require('express')
const router = express.Router()
const userRoutes = require('./user/user.route')

router.use('/user', userRoutes)


module.exports = router
