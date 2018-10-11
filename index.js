const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(express.static('./views/'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
	res.sendFile('views/login.html', {root: __dirname })
});
app.get('/test', function(req, res){
	res.sendFile('views/test.html', {root: __dirname })
});
app.get('/signup', function(req, res){
	res.sendFile('views/signup.html', {root: __dirname })
});
app.get('/forgot', function(req, res){
	res.sendFile('views/forgot.html', {root: __dirname })
});
app.get('/admin', function(req, res){
	res.sendFile('views/admin.html', {root: __dirname })
});
app.post('/auth', function(req, res){
	res.send(req.body);
	console.log(req.body);
});
app.post('/auth/admin', function(req, res){
	res.send(req.body);
	console.log(req.body);
});

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Example app listening on port ${port}!`))