const express = require('express')
const app = express()
const router = require('./routes/route')

require('dotenv').config()

const port = process.env.PORT || 3000


app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get('/PING', (req, res) => {
    res.status(200).json({
        message: 'PONNNG',
        status: 200
    })
})


app.use('/', router)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
