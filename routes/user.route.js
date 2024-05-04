const express = require('express')
const router = express.Router()
const { TestUserHealth } = require('../handler/user.handler')

router.get('/test', TestUserHealth)
router.get('/greet', (req, res) => {
    res.render('greet_user', {
        initial: req.query.initial,
        name: req.query.name
    })
})



module.exports = router