var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var userData = require('./models/user');
var joiSchema = require('./middleware/validate'); 
var joi = require('joi');
var signIn = require('./route/signInRoute');
var fetchUser = require('./route/fetchUserRoute');
var updateUser = require('./route/updateUserRouter');
var updateUserForm = require('./route/updateUserRouter');
var allUsers = require('./route/allUsers');

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
    joi.validate({password:req.body.password,userName:req.body.userName},joiSchema, (err, some) => {
        if(err){
            console.log(err)
        }
        else{
            data.password = data.generateHash(req.body.password);      
            data.save();
            res.send("Succesfully signed up " + req.body.userName);
        }
    } )

    
})

app.get('/css', function (req, res) {
    res.sendFile(path.join(__dirname + '/public' + 'stylesheet/main.css'))
})

app.use('/signIn',signIn);
app.use('/fetchUser',fetchUser);
app.use('/updateUser',updateUser);
app.use('/updateUserForm',updateUserForm);
app.use('/allUsers',allUsers)

app.listen(3000);

console.log("server running at port 3000");
