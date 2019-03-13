import mongoose from 'mongoose'
import express from 'express';
import bodyParser from 'body-parser';
import Route from '../app/routes/nRoutes';
const app = express();
const port= 3000;


mongoose.connect('mongodb://localhost/NodeSandBox',{useNewUrlParser:true})
.then((data)=>{console.log('connected the mongoose ');
});

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use('/n',Route);

app.listen(3000,()=>{
    console.log('listinging at 3000');
});