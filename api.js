const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());


app.post('/email', (req, res) => {

    let email = req.body && req.body.email || null
    email && fs.appendFileSync('emails.txt', email+"\n")
    res.send("ok")

})


module.exports = {
   path: '/api',
   handler: app
}