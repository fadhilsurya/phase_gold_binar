const express = require('express')
const router = express.Router()
const userRoutes = require('./user.route')
const morgan = require('morgan')


router.use(morgan('dev'))

router.get('/index', (req, res) => {
    try {
        res.status(200).render('index')
        return
    } catch (error) {
        res.status(404).json({
            message: 'error',
            data: null,
            err: error.message
        })
        return

    }
})

router.use('/user', userRoutes)

router.use((req, res, next) => {
    res.status(404).json({
        message: `sorry we can't find what are you looking for`,
        data: null,
        error: new Error('404 page not found').message
    })
    return
})


module.exports = router