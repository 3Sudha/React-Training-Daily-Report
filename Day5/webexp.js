const express = require('express');

const webexp = express();

// webexp.get('/emp', function(req, res)
// {
//     res.send('Hello World!')
// })


// webexp.get('/emp/20', function(req, res)
// {
//     res.send('Hello Dear!')
// })

//<--------------Get Dynamic Id with this------------->
webexp.get('/emp/:id', function(req, res)
{
    const id= req.params.id
    res.send('Hello Dear!' +id)
})


webexp.listen(9090,function(req,res)
{
    console.log('Running....')
})