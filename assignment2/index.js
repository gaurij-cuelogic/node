var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost:27017/Company',{ useNewUrlParser: true },{autoIndex : false});

var Schema = mongoose.Schema;

var userDataSchema = new Schema({
    EID:{type:Number, unique:true},
    First_Name:{type:String, required:true},
    Last_Name:{type:String, required:true},
    Salary:{type:Number, required:true}
})

var userData = mongoose.model('userData',userDataSchema);

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'));

app.post('/',function(req,res){
    var item={
        EID:req.body.eid,
        First_Name:req.body.fname,
        Last_Name:req.body.lname,
        Salary:req.body.salary
    }

    var data = new userData(item);
    data.save();
    res.redirect('/')
})

app.get('/css',function(req,res){
    res.sendFile(path.join(__dirname+'/public'+'/main.css'))
})

app.get('/update',function(req,res){
    res.sendFile(path.join(__dirname+'/public'+'/update.html'),function(err){
        if(err){
            console.log(err);
        }
    })
})

app.post('/update',function(req,res){
    userData.findOne({'EID':req.body.eid},function(err,users){
        if(err){
            console.log(err);
        }else{
            if(users == null){
                res.send("Enter valid user id");
            }else{
                users.EID = req.body.eid;
                users.First_Name=req.body.fname,
                users.Last_Name=req.body.lname,
                users.Salary=req.body.salary
                users.save();
                res.send("done");
            }
            
        }
    })
})

app.get('/delete',function(req,res){
    res.sendFile(path.join(__dirname+'/public'+'/delete.html'),function(err){
        if(err){
            console.log(err);
        }
    })
})

app.post('/delete',function(req,res){
   // console.log(req.body.eid);
    userData.findOne({'EID':req.body.eid},function(err,users){
        if(err){
            console.log(err)
        }else{
            users.remove();
            res.send("Succesfully Deleted"+req.body.eid);
        }   
    });   
})

app.listen(3000);

console.log("server running at port 3000");

