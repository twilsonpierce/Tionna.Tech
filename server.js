var express = require('express')
var app = express()
var bodyparser = require('body-parser')
var path = require('path')

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json())
app.use(express.static(__dirname))

app.get('/*', (req,res)=>{
	res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(5555);