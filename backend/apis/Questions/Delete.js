var express = require('express')
var db = require('../../utils/database');
const { route } = require('./Create');
var router = express.Router();

router.post('/deleteUser',(req,res)=>{
    const id = req.body.id;
    let query = `Delete from questions where id =${id}`
    db.query(query,(err,data)=>{
        if(err){
            console.log("error from delete user",err);
            res.status(400).send("error while deleting")
        }
        else{
            console.log("success delete");
            res.status(400).send("Deleted")
        }

    })
})
module.exports=router;