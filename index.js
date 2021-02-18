const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./app/apollo/typeDef");
const resolvers = require("./app/apollo/resolver");
const app = require("./app");
const db = require("./app/models");

//setup apollo server
const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

//tes loging db
db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection DB has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const port = process.env.PORT || 3000;

app.listen(port, process.env.HOSTNAME, () => {
  console.log(`🚀 Server api ready at http://localhost:4000/api`);
  console.log(
    `🚀 Server graphql ready at http://localhost:4000${server.graphqlPath}`
  );
});
