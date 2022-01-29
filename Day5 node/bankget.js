var express= require('express');
var app =express();
var fs = require("fs");

app.get('/bank', function(req, res){
    
fs.readFile("Bankdata.json", 'utf8', function (err, data) {
    console.log( data );
    //res.end( "Hello world! This is sudha Kashyap");
    res.end( data );
    
});
});

app.listen(9090);


// var express = require('express');
// var app = express();

// // app.get('/',function(req,res){
// //    res.send( "Hello world! This is sudha Kashyap");

// // })

// app.post('/shows', function (req, res) {
   
//       res.send( "Hello world! This is sudha Kashyap");
//    });

// app.listen(8000, function () {
//    console.log("connection is success");
// });

