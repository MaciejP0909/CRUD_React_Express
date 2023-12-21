var express = require('express');
var app = express();

app.get("/", (req,res) => {
    res.send("jest git")
})
app.get("/maciek", (req,res) => {
    const users = [
        {id:1, name:'Maciek'},
        {id:2, name:"Łukasz"}
    ];
    res.json(users).status(200);
})
var server = app.listen(8000, function () {  
    var host = server.address().address;  
    var port = server.address().port;  
    console.log('Example app listening at http://%s:%s', host, port);  
  });  

console.log("cos");
console.log("dwa");