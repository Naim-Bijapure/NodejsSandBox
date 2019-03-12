import path from 'path'
import AWS from 'aws-sdk'
import uuid from 'uuid'
import fs from 'fs'



var credentials = new AWS.SharedIniFileCredentials({profile: 'Naim7407'});
AWS.config.credentials = credentials;
// Create unique bucket name
var bucketName = 'pronoob-7407-node-sdk-sample';
// Create name for uploaded object key
var keyName = 'index.html';
var filePath=path.join(__dirname,'./index.html');
console.log(filePath);

// Create a promise on S3 service object
var bucketPromise = new AWS.S3({apiVersion: '2006-03-01'}).createBucket({Bucket: bucketName}).promise();

// Handle promise fulfilled/rejected states
var myData=""; 
bucketPromise.then(
    function(data) {
        
        // Create params for putObject call

   fs.readFile(filePath,"UTF8",(err,data)=>{
        if (err) throw err;
         myData+=data;
        var objectParams = {Bucket: bucketName,
                             Key: keyName, Body:myData
                            };
                            // Create object upload promise
       var uploadPromise = new AWS.S3({apiVersion: '2006-03-01'}).putObject(objectParams).promise();
                    console.log(myData);
                    
    
       uploadPromise.then(
           function(data) {
               console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
            });
            
            
        });

}).catch(
  function(err) {
    console.error(err, err.stack);
});
