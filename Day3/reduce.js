
//filter, reduce, map

let nums =[1,65,87,98,45,62,48,1];
let result = nums.filter(n => n%2===0)
.map(s =>s *2)
// .forEach(m=>{
//     console.log(m);
// })
// console.log(result)
// .map(s =>s *2)

.reduce((a,b)=>a+b);
console.log(result);