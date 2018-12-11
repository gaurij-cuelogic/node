const userData = require('../models/user');
//const token = require('../middleware/authenticate')
var activityData = require('../models/userActivity');
var moment = require('moment');
var requestIp = require('request-ip');
var jwt = require('jsonwebtoken');
var useragent = require('express-useragent');
var localStorage = require('localStorage');

class SignIn {
    signInPost(req, res) {
        console.log("in sign in post")
        userData.findOne({ 'userName': req.body.userName }, function (err, users) {
            if (err) {
                console.log(err);
            }
            else {
                if (users == null) {
                    res.send("Enter valid user name");
                }
                if (!users.validPassword(req.body.password)) {
                    res.send("invalid password");
                }
                else {
                 //   res.send("logged in successfully");
                    var token = jwt.sign({ userName: users.userName }, 'mysecretkey',
                        {
                            expiresIn: "2 days"
                        });


                    //localStorage.setItem("token",token)
                    // var value = localStorage.getItem("token");
                    //console.log(value)

                    let clientIp = requestIp.getClientIp(req);
                    let date = moment().format("MMMM Do YYYY, h:mm:ss a");

                    var activity = new activityData();
                    activity.userName = req.body.userName;
                    activity.IP = clientIp;
                    // activity.UA = token;
                    activity.loginDate = date;

                    activity.save();
                }
            }
            res.json(
                {"token": token,
                "message":"login successful"
         })

        })
    }


}

module.exports = new SignIn();