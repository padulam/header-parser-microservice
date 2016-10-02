var express = require('express');
var app = express();
var port = process.env.PORT||8000;

app.get('/',function(request,response){
	var software = request.headers['user-agent'].match(/\((.*?)\)/)[1];
	var language = request.headers['accept-language'].split(',')[0];
	response.json({ipaddress: request.ip, language: language, software: software});
});

app.listen(port);