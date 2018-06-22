var express = require('express');
var app = express();
var path = require('path');

var port = Number(process.env.PORT || 3000);

app.use(express.static(__dirname+ '/dist/github-search'));

app.get('/*', (req, res, next)=>{
    res.sendFile(path.join(__dirname +'/dist/github-search/index.html'));
})



app.listen(port, ()=>{
    console.log('Server running on port: '+port)
});