//<-----------------Read the file---------------->//
var fs= require('fs')
var data=fs.readFileSync('git.txt', 'utf8')
 
console.log(data);
