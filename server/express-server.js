var express = require('express')
var app = express()

app.use('/', express.static('./public'))

var server = app.listen(8000, function () {
	console.log('Hunta server running on port 8000');
})
