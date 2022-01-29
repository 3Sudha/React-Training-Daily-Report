var express = require('express');
var app = express();

// app.get('/',function(req,res){
//    res.send( "Hello world! This is sudha Kashyap");

// })

app.post('/shows', function (req, res) {
   
      res.send( "Hello world! This is sudha Kashyap");
   });

app.listen(8000, function () {
   console.log("connection is success");
});