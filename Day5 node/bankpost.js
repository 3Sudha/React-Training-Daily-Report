var express= require('express');
var app =express();
var fs = require("fs");

app.post('/bank', function(req, res){
    
fs.readFile("Bankdata.json", 'utf8', function (err, data) {
    console.log( data );
    //res.end( "Hello world! This is sudha Kashyap");
    res.end( data );
    
})
});

app.listen(9089, function () {
       console.log("connection is success");
});
     




