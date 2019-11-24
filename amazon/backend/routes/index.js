var express = require('express');
var router = express.Router();



// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017";
// MongoClient.connect(url,function(error,result){
//   if(error){
//     console.log("db error",error)
//   }else{
    
//    db= result.db("project");
//     console.log("db created "+"connected to",db.databaseName);
//   }
// });



/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index', { title: 'backend' });
});

module.exports = router;
