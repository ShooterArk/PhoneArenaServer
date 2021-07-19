var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');


/* GET home page. */
router.get('/', async function(req, res, next) {
  const data = await readFile();
  console.log(data);
  res.status(200).send({status:200,model:  data});
});

const readFile = () => {
  return new Promise((resolve,reject) => {
    try{
      var processedFile = path.resolve(__dirname + "/phones.json");
  
  fs.readFile(processedFile, 'utf8', async function(err, data) {
    if (err) {
      console.log(err);
      reject(err);
    }
    obj = JSON.parse(data);
    resolve(obj);
    //res.send(s3Result);
  });
    }catch(error){
      reject(error);
    }
  })
  
}

module.exports = router;
