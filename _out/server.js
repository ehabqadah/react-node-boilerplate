var express = require('express'),
app = express(),
http = require('http'),
server;

app.use(express.static('static'));

server = http.createServer(app);

server.on('error', function (error) {
 	console.log(error);
});

server.listen(process.env.port || 3000 ,function () {
	
	var host = server.address().address,
	 port = server.address().port;

	console.log("Server listening at http://%s:%s", host, port);
});