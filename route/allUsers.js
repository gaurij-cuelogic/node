const express = require("express");
//const fetchUser = require("../controller/fetchUser");
//var path = require('path');
const router = express.Router();
var userData = require('../models/user');
var authenticate = require('../middleware/authenticate');



router.get("/",authenticate, (req, res, next) => {
  userData.find({}).toArray(function(err, result) {
    if (err) {
        console.log(err)
    }
    res.send(JSON.stringify(result));
})
});
// router.post("/",fetchUser.fetchUserPost)

module.exports = router;