var express = require('express');
var app = express();
var port = process.env.PORT||8000;

app.get('/',function(request,response){
	var ip = getIpAddress(request);
	var software = request.headers['user-agent'].match(/\((.*?)\)/)[1];
	var language = request.headers['accept-language'].split(',')[0];
	response.json({ipaddress: ip, language: language, software: software});
});

function getIpAddress(request){
	if(request.headers['x-forwarded-for']){
		var ips = request.headers['x-forwarded-for'].split(",");
		return ips[ips.length -1];
	}else{
		return request.connection.remoteAddress;
	}
}

app.listen(port);