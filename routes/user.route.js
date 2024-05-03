const express = require('express')
const router = express.Router()
const { TestUserHealth } = require('../handler/user.handler')

router.get('/user-health', TestUserHealth)




module.exports = router