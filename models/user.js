var mongoose = require ('mongoose');
var bcrypt = require('bcrypt');
mongoose.connect('mongodb://localhost:27017/Users', { useNewUrlParser: true }, { autoIndex: false });

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
    return bcrypt.compareSync(password,this.password);
}

module.exports = mongoose.model('userData',userDataSchema);