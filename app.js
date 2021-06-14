const express = require('express');
let app = express();

app.get('/', (req, res)=>{
    res.send('<h1>HELLO</h1>');
});

app.get('/api', (req, res)=>{
   // res.send('<h1>API PAGE</h1>');
    res.json({name: 'Rajeswari'});
});

app.listen(9999);
console.log('Its working');