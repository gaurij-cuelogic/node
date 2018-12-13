const express = require("express");
const SignIn = require("../controller/signIn");
var path = require('path');
const router = express.Router();
//var wsserver = require( '../index' ); 


router.get("/", (req, res, next) => {
 // console.log(io,"this is io")
    //  wsserver.io.sockets.emit('this', { will: 'be received by everyone' });
    res.sendFile(path.join(__dirname + '/../public' + '/signIn.html'), function (err) {
        if (err) {
            console.log(err);
        }
      
    })
});
router.post("/", SignIn.signInPost)

module.exports = router;