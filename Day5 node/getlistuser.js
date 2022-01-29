// var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile("user.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(9090, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})



// var express= require('express');
// var app =express();

// app.get('/bank', function(req, res){
//     res.end("Hii Sudha this is your first page")
// });


app.listen(8000, function () {
   console.log("connection is success");
});