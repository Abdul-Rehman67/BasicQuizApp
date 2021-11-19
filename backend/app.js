var express = require('express')
var cors = require('cors')
var bodyParser = require("body-parser");
const db = require('./utils/database')
var app = express();
const port = 5000
require("./utils/dbfunction").connect();

app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static('public'));


//routes
const createuser=require("./apis/Questions/Create")
 const selectuser=require("./apis/Questions/Select")
 const upadteuser=require("./apis/Questions/Update")
 const deleteuser=require("./apis/Questions/Delete")




//routes middleware
app.use('/api/question',createuser)
app.use('/api/question',selectuser)
app.use('/api/question',upadteuser)
app.use('/api/question',deleteuser)


//port listening
app.listen(port, "0.0.0.0", () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });