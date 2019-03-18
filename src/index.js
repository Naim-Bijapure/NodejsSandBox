import express from 'express'
import expressGraphql from 'express-graphql'
import{graphql, buildSchema} from 'graphql'


// GraphQL schema
var schema = buildSchema(`
   type Person{
       id:Int,
       name:String
   }
  type Query{
      N(data:String):String,
      person:Person,
      persons(id:Int):[Person]
  } 

`);

function myOperation(data) {
    console.log('data is ',data);
    
    return "cool performing operation "  
}
const persons=[{ id:1,name:'Pronoob'}, {id:3,name:'Asma'}, {id:2,name:'Naim'}]
var root = {
    N:(data)=>{return "yo got the data"+data.data} ,
    person:()=>{ return {id:1,name:'Pronoob'}},
    persons:(p)=>{return persons.filter((pp)=>pp.id==p.id)}
};

const app = express();
app.use('/graphql',expressGraphql({
    schema:schema,
    rootValue:root,
    graphiql:true
}));

app.listen(4000,()=>console.log('server started'));