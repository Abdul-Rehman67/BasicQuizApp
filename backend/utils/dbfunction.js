const db =require('../utils/database')
async function connect (){
    try{
        db.getConnection(err=>{
            if(err){
                console.log("db not connected");
                console.log(err);
                throw err

            }
            else {
                console.log("db connected");
            }
        });
    }catch(ex){
        console.log(ex);
    }
}
module.exports ={
    connect,
}