var express= require('express');
var app =express();
var fs = require("fs");
var bodyParser= require('body-parser');

app.use(bodyParser.json());

app.put('/bank/:id', function(req, res){
    

     fs.readFile("Bankdata.json", 'utf8', function (err, data) {
     data = JSON.parse( data );
     data = data["user" + req.params.id];
          //data=  data.findById(id)

     let name = req.body.name
     balance = req.body.balance
    withdrawal = req.body.withdrawal
    deposit= req.body.deposit
    comment = req.body.comment
    finalbalance= req.body.finalbalance

    let index = data.findById((Bankdata) =>{
        return(Bankdata.id == Number.parseInt(id))
    })

    if(index>=0){
        let bnk= bank[index]
        bnk.name = name
        bnk.balance=balance
        bnk.withdrawal=withdrawal
        bnk.deposit= deposit
        bnk.comment=comment
        bnk.finalbalance=finalbalance
        res.json(bnk)
    }

    else{
         res.status("error")
    }
   
   // console.log(data);
    
    
    //res.end( "Hello world! This is sudha Kashyap");
    //res.json( req.body);
   // res.json( data);
    
})
});

app.listen(9090, function () {
       console.log("connection is success");
});
     

//module.exports = app;


