const express = require('express')
const router = express.Router()
const { Create, Get, GetById, Update, Delete } = require('../../handler/user.handler')

router.post('/register', Create)
router.get('/', Get)
router.get('/:id', GetById)
router.put('/:id', Update)
router.delete('/:id', Delete)

module.exports = router
