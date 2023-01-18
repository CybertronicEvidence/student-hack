const express = require('express')
const request = require('./routes/request')


const app = express()
const port = 5000

app.use('/api/chat', request)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})