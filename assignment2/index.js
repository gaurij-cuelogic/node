var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost:27017/Company',{ useNewUrlParser: true },{autoIndex : false});

var Schema = mongoose.Schema;
var app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('./public'))


var EmployeeSchema = new Schema({
    EmpId: {
        type: Number,
        unique: true,
    },
    FullName: {
        type: String,
    },
    Address: {
        state: String,
        city: String,
        zip: Number
    },
    DateOfBirth: Date,
    JoinDate: Date,
    Salary: Number
});

var EmployeeModel = mongoose.model('Employee', EmployeeSchema);


var createData = (req, res, next) => {
    //res.sendFile(path.join(__dirname, '/public/index.html'));
    var employee = new EmployeeModel({
        EmpId: req.body.Empid,
        FullName: req.body.name,
        Address: req.body.address,
        DateOfBirth: req.body.BirthDate,
        JoinDate: req.body.JoiningDate,
        Salary: req.body.salary,
    });

    var data = new EmployeeModel(employee);
    data.save();
    res.send(data);
}

var showDeletePage = (req,res,next) => {

    res.sendFile(path.join(__dirname+'/public'+'/delete.html'));
  
}

var deleteEmployee = (req,res,next) => {

    empData.findOneAndRemove({empId:req.body.empid}, function(err, employee) {
        res.send("Deleted" + employee);
    });
   
}

var showUpdatePage = (req,res,next) => {
    res.sendFile(path.join(__dirname+'/public'+'/update.html'));
   


}
showEmployeeDetails = (req,res,next) => {
    
    empData.findOne({"empId":req.body.empid},function(err,employee){
       
        if(err) {
            throw err;
        }
    });
    
}



var updateEmployee = (req,res,next) => {
    var query = {empId: req.body.empid};  
    var updateData = {
        empId: req.body.empid,
        firstName: req.body.fname,
        lastName: req.body.lname,
        age: req.body.age,
    }  
    
    empData.findOneAndUpdate(query,updateData, function(err,data) {
        if(err) { throw err }

        res.send("Updated Data" + data);
        
    })
}

var showUpdatePages = (req,res,next) => {
    res.redirect('/updateEmployee');
}

app.get('/',createData);
app.post('/',createData);
app.get('/delete',showDeletePage);
app.post('/delete',deleteEmployee);
app.get('/update',showUpdatePage);
// app.post('/updateEmployeeOne',showEmployeeDetails);
// app.post('/updateEmployeeTwo',updateEmployee);
// app.get('/updateEmployeeTwo',showUpdatePages);

app.listen(3000);




