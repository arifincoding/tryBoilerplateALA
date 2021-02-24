const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./app/deliverey/graphql/typeDef");
const resolvers = require("./app/deliverey/graphql/resolver");
const app = require("./app");
const mongodb = require("./config/mongoose");

//setup apollo server
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

//init db
mongodb.initDb();

const port = process.env.PORT || 4000;

app.listen(port, process.env.HOSTNAME, () => {
  console.log(`🚀 Server restapi ready at http://localhost:4000/api`);
  console.log(
    `🚀 Server graphql ready at http://localhost:4000${server.graphqlPath}`
  );
});
