var express = require('express')
var router = express.Router();
var db = require('../../utils/database')

router.post('/updateUser',(req,res)=>{
    var id = req.body.id;
    const name = req.body.name
    let query = `update questions set name = "${name}" where id = ${id}`
    console.log(query);
    db.query(query,(err,data)=>{
        if(err){
            console.log(err);
            res.status(400).send("error while inserting")
            
        }
        else{
            console.log("success");
            console.log(data);
            res.status(200).send("Updated Sucessfully")
        }
    })
   
})
module.exports=router;