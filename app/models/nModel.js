import mongoose, { Schema, model } from 'mongoose'

const nSchema = new Schema({
       name:{type:String,unique:true },
       data:String ,
       myId:{
           type:Number,
           min:[5,'to low'],
           max:[10,'to hight'],
           required:[true]
       }
},{autoIndex:false});
//user defined methods
nSchema.methods.getData=function () {
    console.log(this.name,this.data);
    this.save(); 
}

nSchema.query.byName=function (n) {
   return this.where({name:n}); 
}

// this is virtual method
nSchema.virtual('Thank').get(function () {
    return this.name+'  is awesome man thank you ' 
});

// nSchema.set('timestamps',{createdAt:true});

const nModel=   model('nModel',nSchema); 
export default nModel; 