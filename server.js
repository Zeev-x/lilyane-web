const express = require('express');
const path = require('path');
const fs = require('fs');

const port = process.env.PORT || fs.readFileSync('./config/port.conf','utf8').trim();
const server = express();

server.use(express.static(path.resolve(__dirname,'public')));
server.listen(port,() => {
    console.log('Server runing on port',port);
});

//------------------------------------------//

server.get('/home',(req,res) => {
    var text = fs.readFileSync('./view/home.html','utf8');
    res.send(text);
});

server.get('/about',(req,res) => {
    var text = fs.readFileSync('./view/about.html','utf8');
    res.send(text);
});

server.get('/service',(req,res) => {
    var text = fs.readFileSync('./view/service.html','utf8');
    res.send(text);
});

server.get('/contact',(req,res) => {
    var text = fs.readFileSync('./view/contact.html','utf8');
    res.send(text);
});

//------------------------------------------//
server.use((req,res) => {
    var path = req.path;
    var errHtml = fs.readFileSync('./error/error.html','utf8');
        errHtml = errHtml.replace('[PATH]',path);
    res.send(errHtml);
});
