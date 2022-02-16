var http = require("http");
var express = require('express');
var app = express();
var mysql      = require('mysql');
var bodyParser = require('body-parser');

//create connection
var connection = mysql.createConnection({
  host     : 'localhost', 
  user     : 'root', 
  password : '', 
  database : 'test',
  multipleStatements: true
});

connection.connect(function(err) {
  if (err) throw err
  console.log('Connection Successful')
})


//start body-parser configuration
app.use( bodyParser.json() );       
app.use(bodyParser.urlencoded({    
  extended: true
}));


//create server
var server = app.listen(3002 )
console.log("Running...")



//Using get
app.get('/customer', function (req, res) {
   connection.query('select * from customer', function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});
//using get by id 
app.get('/customer/:id', function (req, res) {
   connection.query('select * from customer where Id=?', [req.params.id], function (error, results, fields) {
	  if (error) throw error;
	  res.end(JSON.stringify(results));
	});
});

//create new data
app.post('/customer', function (req, res) {
   var params  = req.body;
   console.log(params);
   connection.query('INSERT INTO customer SET ?', params, function (error, results, fields) 
  // connection.query('Insert into  `customer` SET `Name`=?,`Address`=?,`Country`=?,`Phone`=? where `Id`=?', [req.body.Name,req.body.Address, req.body.Country, req.body.Phone, req.body.Id], function (error, results, fields)
  {
	  if (error) throw error;
	  //res.end(JSON.stringify(results));
    res.send("Inserted...")
	});
});

//update the data
app.put('/customer', function (req, res) {
  var params  = req.body;
  console.log(params);
   connection.query('UPDATE `customer` SET `Name`=?,`Address`=?,`Country`=?,`Phone`=? where `Id`=?', [req.body.Name,req.body.Address, req.body.Country, req.body.Phone, req.body.Id], function (error, results, fields) {
	  if (error) throw error;
	  //res.end(JSON.stringify(results));
    res.send("update successful");
	});
});

//Delete the data
app.delete('/customer', function (req, res) {
   console.log(req.body);
   connection.query('DELETE FROM `customer` WHERE `Id`=?', [req.body.Id], function (error, results, fields) {
	  if (error) throw error;
	  res.end('Record has been deleted!');
	});
});

//Delete the data by id
app.delete('/customer/:id', function (req, res) {
    console.log(req.body);
    connection.query('DELETE FROM `customer` WHERE `Id`=?', [req.body.Id], function (error, results, fields) {
       if (error) throw error;
       res.end('Record has been deleted!');
     });
 });