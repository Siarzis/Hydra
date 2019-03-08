var ps = require('python-shell');
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

// app.get('/api/python', function (req, res) {
// 	var spawn = require('child_process').spawn;
// 	// first spawn() argument should be considered in containerization
// 	var process = spawn('python', ['./testpy.py']);

// 	process.stdout.on('data', function (data) {
// 		console.log(typeof data);
// 		res.send(data.toString());
// 	});
// });

app.get('/api/python', function (req, res) {
	var options = {
		// this path should be considered in containerization
		pythonPath: "C:/Users/User/Anaconda3/envs/ForecastApp/python.exe"
	};

	ps.PythonShell.run('./testpy.py', options, function (err, data) {
		if (err) throw err;
		res.send(JSON.parse(data[0]));
	});
});
