const express = require("express");
const adminUpdateUser = require("../controller/adminUpdateUser");
var path = require('path');
const router = express.Router();
var authenticate = require('../middleware/authenticate');

// router.get("/",authenticate,(req, res, next) => {
//     console.log(req)
   
// });

router.post("/",adminUpdateUser.adminUpdateUserPost)

module.exports = router;