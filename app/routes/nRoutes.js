import express from 'express'
import nModel from '../models/nModel';

const  Route = express.Router();

Route.get('/add',(req,res)=>{

    let nData= new nModel({
     name:req.query.name,
     data:req.query.data
     }); 

   async function Add() {
       try {
          const SavedData= await nData.save();
            
        
          return res.json({data:`added the data ${nData.Thank}`});  
       } catch (err) {
       return    res.json(err); 
       } 
   }

   
   return Add();
    // res.json({'data':'added the data'});
})

Route.get('/find',(req,res)=>{
    nModel.find().byName('pronoob').exec(function (err,data) {
       res.json(data); 
    });

});
export default  Route;