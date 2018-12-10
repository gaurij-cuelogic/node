var mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/UserActivity', { useNewUrlParser: true }, { autoIndex: false });
var Schema = mongoose.Schema;


var userActivitySchema = new Schema({
    userName: {type:String},
    IP:{type:String},
    UA:{type:String},
    loginDate:{type:String},
})

module.exports = mongoose.model('userActivity',userActivitySchema);