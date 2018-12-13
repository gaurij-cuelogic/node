const express = require("express");
const updateUser = require("../controller/updateUser");
var path = require('path');
const router = express.Router();
var authenticate = require('../middleware/authenticate');

router.get("/",(req, res, next) => {
   
});

router.post("/",updateUser.updateUserPost)

module.exports = router;