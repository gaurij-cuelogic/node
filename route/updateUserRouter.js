const express = require("express");
const updateUser = require("../controller/updateUser");
var path = require('path');
const router = express.Router();
var authenticate = require('../middleware/authenticate');

router.get("/",authenticate,(req, res, next) => {
  
  
  
  
  
    // jwt.verify(req.token,'mysecretkey',(err,data)=>{
    //     if(err){
    //         sendStatus(403)
    //     }else{
    //         res.sendFile(path.join(__dirname + '/../public' + '/updateUser.html'), function (err) {
    //             if (err) {
    //                        console.log(err);
    //                   }
    //               })
    //     }
    // })
   
});

// function ensureToken(req,res,next){
//     const bearerHeader = req.headers["authorization"];
//     if(typeof bearerHeader !== 'undefined'){
//         const bearer = bearerHeader.split(" ");
//         const bearerToken = bearer[1];
//         request.token = bearerToken;
//         next();
//     }else{
//         res.sendStatus(403);
//     }

// }
router.post("/",updateUser.updateUserPost)

module.exports = router;