const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var url = 'mongodb://ratnani1996:1234@ds147487.mlab.com:47487/todo-app-node';
mongoose.connect(url);

var todo = mongoose.model('todo', {
    item : {
        type : String,
        required : true,
        trim : true
    }
})



module.exports = {todo};
