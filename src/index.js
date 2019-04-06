import express from 'express'
import path from 'path'

let app=express();
let staticPath = path.resolve(`${__dirname}/app`);
app.use(express.static(staticPath));

 app.get('/',(req,res)=>{
   console.log('got the request',staticPath);
   
   res.sendFile(path.resolve(`${__dirname}/app/index.html`));
 });
app.listen(3000,()=>{
  console.log('listining on port 3000');
  
});