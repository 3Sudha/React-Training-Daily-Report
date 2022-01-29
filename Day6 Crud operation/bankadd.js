var express = require('express');
var app = express();
var fs = require("fs");

var user = {
    // "user6" : {
    //     "name" : "Amit",
    //     "balance" : 40000,
    //     "withdrawal" : 500,
    //     "deposit": "",
    //     "comment": "Amit withdrawal Rs. 500",
    //     "finalbalance": 39500,
    //     "id": 6
    //  },


    "user7" : {
        "name" : "Riya",
        "balance" : 10000,
        "withdrawal" : "",
        "deposit": 5000,
        "comment": "Riya deposit Rs. 5000",
        "finalbalance": 15000,
        "id": 7
     },
}

app.post('/add', function (req, res) {

   fs.readFile("Bankdata.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      data["user7"] = user["user7"];
      
      
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
    console.log("connection is success");
})