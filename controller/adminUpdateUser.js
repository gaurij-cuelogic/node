var userData = require('../models/user');

class adminUpdateUser {
    adminUpdateUserPost(req, res, next) {
        console.log("in update user post")
        userData.findOne({ 'userName': req.body.userName }, function (err, user) {
            if (err) {
                console.log(err);
            } else {
                if (user == null) {
                    res.send("Enter valid user id");
                }
                 else {
                     console.log("go the username")
                    user.userName = req.body.userName;
                    user.password = user.generateHash(req.body.password);
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

module.exports = new adminUpdateUser();

