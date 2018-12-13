const userData = require('../models/user');
//const token = require('../middleware/authenticate')
var activityData = require('../models/userActivity');
var moment = require('moment');
var requestIp = require('request-ip');
var jwt = require('jsonwebtoken');
var useragent = require('express-useragent');



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
                if (req.body.password == null) {
                    res.send("Enter password");
                }
                if (!users.validPassword(req.body.password)) {
                    res.send("invalid password");
                }
                else {
                    console.log("else")
                    var token = jwt.sign({ userName: users.userName }, 'mysecretkey',
                        {
                            expiresIn: "2hr"
                        });
                    console.log("token",token);
                    let clientIp = requestIp.getClientIp(req);
                    let activityDate = moment().format("MM-DD-YYYY");
                    console.log("date",activityDate);
                    let source = req.headers['user-agent'],
                    ua = useragent.parse(source);
                    console.log("user",ua);

                   // var activity = new activityData();
                    let activity = {
                        userName:req.body.userName,
                        IP : clientIp,
                        UA : ua,
                        loginDate : activityDate
                     }

                    let data = new activityData(activity);
                    data.save();
                    console.log("activity ======>",data)
                  //  activity.save();
                }
            }
            res.json({
                    "token": token,
                    "message": "login successful"
                })

        }
        )
    }

}


module.exports = new SignIn();