var express = require('express');
var app = express();
var PORT = 3000;
//get - 1. route, 2. callback func for request and response

var middleware = {
	requireAuthentication: function (req, res, next){
		console.log('private route hit!!');
		next();
	},
	logger : function (req, res, next){
		console.log('Request: ' + req.method + ' ' + req.originalUrl +' @ '+ new Date().toString() );
		next();
	}

};


app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res){
	res.send('Its about us! ');

});


//exposing the folder
app.use(express.static( __dirname + '/public'));

//console.log(__dirname);

app.listen(PORT, function () {
	//executed once the server starts!
	console.log('server started! at ' + PORT);

});