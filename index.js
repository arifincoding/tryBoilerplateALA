const app = require("./app");

const db = require("./app/models");
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
  console.log(`server listen on ${process.env.HOSTNAME}:${port}`);
});
