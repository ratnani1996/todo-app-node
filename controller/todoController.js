var bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var {todo} = require('../mongoose/mongoose.js');

function todoController(app){

    app.get('/todo', (req, res)=>{
        todo.find({}, (err, mongoData)=>{
            if(err){
                console.log(err);
            }
            else{
                res.render('todo.ejs', {data : mongoData});
            }
        })
    })

    app.post('/todo',urlencodedParser, (req, res)=>{
        var newToDo = new todo(req.body);
        newToDo.save().then().catch((err)=>console.log(err));
        todo.find({}, (err, mongoData)=>{
            if(err){
                console.log(err);
            }
            else{
                res.render('todo.ejs', {data : mongoData});
            }
        })
        
    })

    app.delete('/todo/:item', (req, res)=>{
        todo.findOneAndRemove({item : req.params.item.replace(/-/g, ' ')}, (err, doc)=>{if(err){console.log(err)}});
        todo.find({}, (err, mongoData)=>{
            if(err){
                console.log(err);
            }
            else{
                res.render('todo.ejs', {data : mongoData});
            }
        })
    })
}

module.exports = {todoController};