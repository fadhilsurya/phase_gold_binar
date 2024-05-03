

const express = require('express')
const app = express()
const router = require('./routes/routes')

require('dotenv').config()


const port = process.env.PORT || 3000

app.get('/ping', (req, res) => {
    try {
        res.status(200).json({
            message: 'PONG'
        })

        return
    }
    catch {
        res.status(500).json({
            message: 'server busy'
        })
    }
})

app.use('/', router)

app.listen(port, () => {
    console.log(`listening live and well at port : ${port}`)
})
