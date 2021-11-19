var express = require('express')
const router = express.Router();
const db = require("../../utils/database");

router.post("/createUser",(req,res)=>{
    var name = req.body.name;
    var age = req.body.age;
    let query = `Insert into questions (name,age) values ("${name}",${age})`
    console.log(query);
    db.query(query,(err,data)=>{
        if(err){
            console.log(err);
            
        }
        else{
            console.log("success");
            console.log(data);
            res.status(200).send("Inserted Sucessfully")
        }
    })
})
module.exports=router;