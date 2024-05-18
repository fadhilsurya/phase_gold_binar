const express = require('express')
const router = express.Router()
const { Create, Get, GetById } = require('../../handler/user.handler')

router.post('/register', Create)
router.get('/', Get)
router.get('/:id', GetById)


module.exports = router
