var mongoose = require ('mongoose');
var bcrypt = require('bcrypt');
var db = require('mongodb').Db;
mongoose.connect('mongodb://localhost:27017/Assignment', { useNewUrlParser: true }, { autoIndex: false },function(err,database){
    error =err;
    db = database;
});

var Schema = mongoose.Schema;

var userDataSchema = new Schema({
    userName:{type:String, unique:true, required:true},
    password:{type:String, required:true},
    firstName:{type:String},
    lastName:{type:String}
})

userDataSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password ,bcrypt.genSaltSync(9));
}

userDataSchema.methods.validPassword = function(password){
    if(password == null){
        //res.send('enter password');
        res.redirect('/signIn')
    }
    return bcrypt.compareSync(password,this.password);
}

module.exports = mongoose.model('userData',userDataSchema);