const express = require('express')
const app = express()
const PORT = process.env.port || 3001

app.get('/', (req, res) => {
    res.send('<h1>Home</h2>')
})

app.listen(PORT)

