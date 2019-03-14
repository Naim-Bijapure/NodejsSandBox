import { GraphQLServer } from "graphql-yoga";
import { Query } from "./Query";
const resolvers={
    Query
}
const server = new GraphQLServer({
    typeDefs:`${__dirname}/schema.graphql`,
    resolvers
})
server.start(()=>{
    console.log('server is running at 4000');
    
})