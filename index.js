const express = require('express')
const app = express()


require('dotenv').config()

const port = process.env.PORT || 3000



app.get('/PING', (req, res) => {
    res.status(200).json({
        message: 'PONNNG',
        status: 200
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
