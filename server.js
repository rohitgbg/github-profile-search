var express = require('express');
var app = express();
var path = require('path');

var port = Number(process.env.PORT || 4200);

app.use(express.static(__dirname+ '/dist'));

app.get('/*', (req, res, next)=>{
    res.sendFile(path.join(__dirname +'/dist/index.ht,l'));
})



app.listen(port, ()=>{
    console.log('Server running on port: '+port)
});