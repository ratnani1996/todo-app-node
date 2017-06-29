const express = require('express');
var app = express();
var ejs  = require('ejs');
var {todoController} = require('./controller/todoController.js');
app.set('view-engine' , 'ejs');
app.use(express.static(__dirname + '//public'));

//controller
todoController(app);


var port = process.env.PORT || 3000;
app.listen(port , ()=>console.log(`Listening to port ${port}`));