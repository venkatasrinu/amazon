var express = require('express');
var router = express.Router();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
MongoClient.connect(url,function(error,result){
  if(error){
    console.log("db error",error)
  }else{
    
   db= result.db("project");
    console.log("db created "+"connected to",db.databaseName);
  }
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/ins',function(req,res,next){
obj=req.body
  console.log(obj,"obj data")
  db.collection("login").insert(obj,function(err,result){
    if(err){
      console.log(err,"inser error")
    }else{
      console.log("data insert sucess")
      db.collection("login").find({}).toArray(function(err,res1){
        if(err){
          console.log(err,"geting data error")
          res.send(err)
        }else{
          console.log(res1,"data form db")
          res.send(res1)
        }
      })
    }
  })
});


module.exports = router;
