var express = require('express'),
app = express(),
server;

app.use(express.static('static'));


server=app.listen(process.env.port || 3000 ,function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port);
});