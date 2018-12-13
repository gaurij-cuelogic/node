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
var adminUpdateUser = require('./route/adminUpdateUser')
var allUsers = require('./route/allUsers');
var notLoggedIn = require('./route/notLoggedIn');
var jwt = require('jsonwebtoken');
const app = express();
const server = app.listen(3000);
const io = require('socket.io').listen(server);



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
    joi.validate({ password: req.body.password, userName: req.body.userName }, joiSchema, (err, users) => {
        if (err) {
            console.log(err)
        }
        else {
            data.password = data.generateHash(req.body.password);
            data.save();
            var token = jwt.sign({ userName: users.userName }, 'mysecretkey',
                {
                    expiresIn: "2hr"
                });
            // res.send("Succesfully signed up " + req.body.userName);
            res.json(
                {
                    "token": token,
                    "message": "login successful"
                })
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
        }
    })


})

app.get('/css', function (req, res) {
    res.sendFile(path.join(__dirname + '/public' + 'stylesheet/main.css'))
})

app.use('/signIn', signIn);
app.use('/fetchUser', fetchUser);
app.use('/updateUser', updateUser);
app.use('/adminUpdateUser', adminUpdateUser)
app.use('/updateUserForm', updateUserForm);
app.use('/allUsers', allUsers);
app.use('/notLoggedIn',notLoggedIn);

//const server = app.listen(3000);
//const io = require('socket.io').listen(server);

// io.sockets.on("connection",function(socket){
//     socket.on("page_on_load",function(){
//         //console.log(data.text);
//         io.sockets.emit("event_updatetext",{value:"hello"});
//     })
// })

io.of('/signUp')
    .on('connection', function (socket) {
        socket.emit('news', { hello: 'WELCOME!' });
        socket.on('Event', function (data) {
            console.log(data.msg);
        });
    });
// io.sockets.emit('this', { will: 'be received by everyone' });
// io.on('connection', function(socket) {
//     console.log('A user connected');})

 

console.log("server running at port 3000");

//module.exports.io = io;