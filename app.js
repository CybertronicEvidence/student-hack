const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const request = require('./routes/request')
const dotenv = require('dotenv')
dotenv.config()


const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(cors())

app.use('/api/chat', request)

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})