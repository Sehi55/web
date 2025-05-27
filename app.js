var express = require('express'), http= require('http'), path=require('path');
var static = require('serve-static');
var app = express();
var router = express.Router();

app.set('port',process.env.PORT||8080);
app.set('host','127.0.0.1');

app.get('/',(req,res)=>{
	res.redirect('/source/jquery.html');
});
app.use(static(__dirname));

app.use(express.urlencoded());
app.use(express.json());


http.createServer(app).listen(app.get('port'), app.get('host'),()=>{
	console.log("Express server running at "+ app.get('port')+ app.get('host'));
});