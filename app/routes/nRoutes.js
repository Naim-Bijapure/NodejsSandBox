import express from 'express'
import nModel from '../models/nModel';

const  Route = express.Router();

Route.get('/add',(req,res)=>{

    let nData= new nModel({
     name:req.query.name,
     data:req.query.data,
     myId:9
     }); 

   async function Add() {
       try  {
          const SavedData= await nData.save();
            
        console.log(SavedData);
         
          return res.json({data:`added the data ${nData.Thank}`});  
       } catch (err) {
       return    res.json(err); 
       } 
   }

   
   return Add();
    // res.json({'data':'added the data'});
})

Route.get('/find',(req,res)=>{
//    nModel.findOne({name:'A'},"id").then((data)=>{
//        res.json(data);
//    });
   async function findIt() {
      const data = await nModel.find({name:'B'},"name").select('data').limit(3).sort('name');
      return res.json(data);
   }

   findIt();
 
//  let query= nModel.find({data:/c/});
//     query.limit(2).where('name').equals('A').select('name')
//     .then((data)=>{
//         console.log(data);
        
//     });
});
export default  Route;