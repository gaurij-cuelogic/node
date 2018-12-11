const express = require("express");
const SignIn = require("../controller/signIn");
var path = require('path');
const router = express.Router();


router.get("/", (req, res, next) => {
    res.sendFile(path.join(__dirname + '/../public' + '/signIn.html'), function (err) {
          if (err) {
                     console.log(err);
                }
            })
});
router.post("/",SignIn.signInPost)

module.exports = router;