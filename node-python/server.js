var ps = require('python-shell');
var zerorpc = require('zerorpc');
var express = require('express');
var app = express();

var server = app.listen(process.env.PORT || 3000, function() {
	var port = server.address().port;

	console.log('Server now running on port:', port);
});

app.get('/api', function(req, res) {
	var ret_value = {a: 1, b: 2};
	res.send(ret_value);
});

app.get('/python/process', function (req, res) {
	var options = {
		// this path should be considered in containerization
		pythonPath: "C:/Users/User/Anaconda3/envs/ForecastApp/python.exe"
	};

	ps.PythonShell.run('./testpy.py', options, function (err, data) {
		if (err) throw err;
		res.send(JSON.parse(data[0]));
	});
});

app.get('/python/zmq', function (req, res) {
	var client = new zerorpc.Client();
	client.connect('tcp://127.0.0.1:2424')

	client.invoke('test', function(error, json_test, more) {
		res.send(json_test);
		client.close();
	});
});