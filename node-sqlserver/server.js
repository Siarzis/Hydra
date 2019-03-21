const express = require("express");
const pool = require('./dbconfig.js');
const app = express();

// generally, 'res' variable is the return value of every object

const server = app.listen(process.env.PORT || 3000, function () {
	const port = server.address().port; // finds port number from 'server' variable
	console.log("App now running on port", port);
 });

// Function to connect to database and execute query
var executeQuery = async function(query, res) {
	try {
		await pool.connect()
		let result = await pool.request().query(query)

		res.send(result.recordset)
	} catch (err) {
		console.log("Error while connecting/querying database :- " + err);
	}

	pool.close()

	// sql.connect(config, function (err) {
	// 	if (err) {
	// 		console.log("Error while connecting database :- " + err);
	// 		res.send(err);
	// 	}
	// 	else {
	// 		// create Request object
	// 		var request = new sql.Request();
	// 		// query to the database
	// 		request.query(query, function (err, recordsets) {
	// 			if (err) {
	// 				console.log("Error while querying database :- " + err);
	// 				res.send(err);
	// 			}
	// 			else {
	// 				res.send(recordsets);
	// 			}
	// 		});
	// 	}
	// });
}

//GET API
app.get("/api/user", function(req , res){
	var query = "select * from ModelOutput";
	executeQuery (query, res);
});