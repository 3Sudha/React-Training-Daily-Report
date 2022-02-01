const express = require("express");
require("./db/conn");
const Hotel= require("./models/Hotel");
const app = express();

app.use(express.json())

//<------BY USING PROMISES------->//
// app.post("/hotelmgt", function(req, res){
    
//     console.log(req.body);
//     const user= new Hotel(req.body);
//     user.save();
//     res.send("Hello sudha!");
// })



//create the data
app.post("/hotelmgt", async(req, res) => {
    
    try{
    const user= new Hotel(req.body);
    const createUser = await user.save();
    res.status(201).send(createUser);
    }
    catch(e){
    res.status(400).send(e);
    }
})


//Read the data
app.get("/hotelmgt", async(req, res) => {
    
    try{
      const hotedata= await  Hotel.find();
       res.end(hotedata);
    }
    catch(e){
    res.end(e);
    }
})

//get the individual by id

app.get("/hotelmgt/:id", async(req, res) => {
    
    try{
      const _id= req.params;

      const hoteldata= await Hotel.findById(_id);
      
      res.end(hoteldata);

      if(!hoteldata)
      {
          return res.send();
          console.log(hoteldata);
      }
      else{
          res.send(hoteldata);
          console.log(hoteldata);
      }
     
    }
    catch(e){
    res.send(e);
    
    }
})



//Update the data
app.patch("/hotelmgt/:id",  async(req,res) =>{
    //try{
        const _id= req.params;
        const updateHtl = await Hotel.findById(_id, req.body);
        console.log(updateHtl);
    //     res.send(updateHtl);
    // }
    // catch(e){
    //     res.status(404).send(updateHtl);

    // }
})




app.listen(9090)
console.log(" My Connection Successful");