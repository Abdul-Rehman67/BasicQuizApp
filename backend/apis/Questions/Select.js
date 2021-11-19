var express = require ('express')
var db = require ('../../utils/database')
var router = express.Router();
router.get('/selectUser',(req,res)=>{
    let query = `select * from questions`
    console.log("query from select user",query);
    db.query(query,(err,data)=>{
        if(err){
            console.log("error from select user",err);
            res.status(400).send("error while selecting")
        }
        else{
            console.log("success");
         
            // res.status(200).json({
            //     data:data,
            // })
            res.status(200).json({
                data: data,
              });
        }
      
    })
})
module.exports=router;