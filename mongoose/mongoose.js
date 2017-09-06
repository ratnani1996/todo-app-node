const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
require('dotenv').config({paht : './../variables.env'});
var url = 'mongodb://process.env.DATABASE_id:process.env.DATABASE_password@ds147487.mlab.com:47487/todo-app-node';
mongoose.connect(url);

var todo = mongoose.model('todo', {
    item : {
        type : String,
        required : true,
        trim : true
    }
})



module.exports = {todo};
