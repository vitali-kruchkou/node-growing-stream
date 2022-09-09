const express = require("express");
const Sequelize = require("sequelize");

const app = express();
const port = 3000;

const sequelize = new Sequelize(
  "postgres://postgres:123456789@localhost:5432/sequelize"
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

sequelize.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);
});

const User = sequelize.define("users", {
  first_name: { type: Sequelize.STRING },
  last_name: { type: Sequelize.STRING },
});

User.create({ first_name: "ABC", last_name: "ABC" }).then((user) => {
  console.log("Created: ", JSON.stringify(user, null, 4));
});

User.findAll().then((users) =>
  console.log("All users:", JSON.stringify(users, null, 4))
);

app.get("/", (req, res) => res.send("Notes App"));

app.listen(port, () => console.log(`notes-app listening on port ${port}!`));
