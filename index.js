var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
userData = require('./models/user');
activityData = require('./models/userActivity');
joiSchema = require('./validate'); 
joi = require('joi');




var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public' + '/signUp.html'), function (err) {
        if (err) {
            console.log(err);
        }
    })
})

app.post('/', function (req, res) {

    var data = new userData();
    data.userName = req.body.userName;
    data.firstName = req.body.firstName;
    data.lastName = req.body.lastName;
    // console.log("Password =====>",req.body.password)
    joi.validate({password:req.body.password,userName:req.body.userName},joiSchema, (err, some) => {
        // console.log("ERROR  ========>", err);
        if(err){
            console.log(err)
        }
        else{
            data.password = data.generateHash(req.body.password);      
            data.save();
            res.send("Succesfully signedin " + req.body.userName);
        }
    } )
    // console.log(result)
    //data.password = data.generateHash(req.body.password);

    
})

app.get('/css', function (req, res) {
    res.sendFile(path.join(__dirname + '/public' + 'stylesheet/main.css'))
})



app.get('/signIn', function (req, res) {
    res.sendFile(path.join(__dirname + '/public' + '/signIn.html'), function (err) {
        if (err) {
            console.log(err);
        }
    })
})


app.post('/signIn.html', function (req, res) {
    console.log("in post")
    userData.findOne({ 'userName': req.body.userName }, function (err, users) {
        if (err) {
            console.log(err);
        }
        else {
            if (users == null) {
                //res.redirect('/signIn')
                res.send("Enter valid user name");
            }
            if (!users.validPassword(req.body.password)) {
                res.send("invalid password");
            }
            else {
                res.send("logged in successfully");
                // var activity = new activityData();
                // activity.userName = req.body.userName;
                // activity.IP =;
                // activity.UA =;
                // activity.loginDate =;
            }
        }
    })

})


app.listen(3000);

console.log("server running at port 3000");