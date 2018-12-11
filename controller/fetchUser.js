var userData = require('../models/user');

class fetchUser{
    fetchUserPost(req,res,next){
        console.log("in fetch user post",req.body.userName)
userData.findOne({'userName': req.body.userName},function(err,user){
    if(err){
        console.log(err);
    }
    else{
        if(user == null){
            res.send("Enter valid user id");
        }
        else{
            res.send(user)
        }
    }

})
    }
}

module.exports = new fetchUser();

