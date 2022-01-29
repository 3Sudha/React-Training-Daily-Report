var express= require('express');
var app =express();
var fs = require("fs");
var id=2;

app.delete('/bank', function(req, res){
    
fs.readFile("Bankdata.json", 'utf8', function (err, data) {
    const id= req.params.id;
    data = JSON.parse( data );
    delete data["user" + 2];
    //delete data["user"]
    
      
      
    console.log( data );
      
    
    res.end( JSON.stringify(data));

    
    //res.end( "Hello world! This is sudha Kashyap");
    //res.end( data)
    
})
});

app.listen(9000, function () {
       console.log("connection is success");
});
     




