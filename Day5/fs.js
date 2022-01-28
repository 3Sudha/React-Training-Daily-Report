
//<---------------------WriteFile---------------------->//
var fs= require('fs')
 fs.writeFile('catch.js','console.log("saved")', function(fun)
 {
        console.log("Data is Saved");
 }) 
   

//<-------------------AppendFile------------------------->// 
var fs= require('fs')
  fs.appendFile('append.js','console.log("saved")', function(fun)
 {
   console.log("Data is Saved");

 }) 

//<-----------------Unlink the File--------------->//
var fs= require('fs')
fs.unlink('del.js', function(fun)
 {
    console.log("Data is delete");

 })


//<-----------------Read the file---------------->//
 var data=fs.readFileSync('git.txt', 'utf8')
 
    console.log(data);

 
