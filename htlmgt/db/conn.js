const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/htlmgt",{
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true

 })
.then(() => {
    console.log("Connecton is successful");
}).catch((err) => {
    console.log("No Connection! Error");
    
})



//<----------------------------------------------------------------------------------------------->//

// try {
//     console.log("Connecton is successful");
 
// } catch (e) {
//     console.log("error");
// }