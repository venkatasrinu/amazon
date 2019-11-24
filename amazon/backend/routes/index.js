var express = require('express');
var router = express.Router();
const MongoClient=require('mongodb').MongoClient;
const url ="mongodb://localhost:27017";
const dbname="amazon"
MongoClient.connect(url,function(error,result){
  if(error){
    console.log("db error",error)
  }else{
    const db =result.db(dbname);
    console.log("data base conneted to amazon")
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'backend' });
});

module.exports = router;
