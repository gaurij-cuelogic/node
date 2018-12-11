var userData = require('../models/user');

class updateUser {
    updateUserPost(req, res, next) {
        userData.findOne({ 'userName': req.body.userName }, function (err, user) {
            if (err) {
                console.log(err);
            } else {
                if (user == null) {
                    res.send("Enter valid user id");
                } else {
                    user.userName = req.body.userName;
                    user.password = req.body.password;
                    user.firstName = req.body.firstName;
                    user.lastName = req.body.lastName;
                    user.save();
                    res.send("done");
                }
            }
        })
        //console.log("in fetch user post",req.body.userName);
    }
}

module.exports = new updateUser();

