const express = require('express')
const app = express()
const token = require('./middleware/token')
const validate = require('./middleware/validate')
const PORT = process.env.port || 3001

// to call this middleware on all http methods automatically
// this should be on top of all middlewares
// this middleware will call first
app.use(DateGenerator);

//call middlewares in the order in the array
const middleware = [token, validate]

app.get('/home', middleware, (req, res) => {
    res.send('<h1>Home</h2>')
    console.log('user logged')
    console.log(req.token)
})

app.get('/profile', (req, res) => {
    res.send('<h4>no middleware test</h4>')
    console.log('no middleware added')
})

function DateGenerator(req, res, next){
    console.log(new Date)
    next()
}

app.listen(PORT)

