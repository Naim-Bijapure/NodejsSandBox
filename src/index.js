import express from 'express'
import expressGraphql from 'express-graphql'
import graphql,{buildSchema} from 'graphql'


// GraphQL schema
var schema = buildSchema(`
    type Query {
        message: String,
        name:String
    }
`);

// Root resolver
var root = {
    message: 'Hello World!',
    name:'naim'
};

// Create an express server and a GraphQL endpoint
var app = express();
app.use('/graphql', expressGraphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));