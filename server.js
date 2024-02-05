const express = require('express')
const app = express()
const token = require('./middleware/token')
const validate = require('./middleware/validate')
const PORT = process.env.port || 3001

const middleware = [token, validate]

app.get('/home', middleware, (req, res) => {
    res.send('<h1>Home</h2>')
    console.log('user logged')
})

app.listen(PORT)

