const express = require("express");
const app = express();
const connectDb = require("./config/database");
const User = require("./models/user");
app.use(express.json());
app.post("/signup", async (req, res) => {
  //   console.log(req.body);
  // creating a new instance of the user model
  //   const userObj = {
  //     firstName: "salman",
  //     lastName: "khan",
  //     email: "v@gmail.com",
  //     password: "1234",
  //   };

  const userObj = req.body;

  const user = new User(userObj);

  try {
    await user.save();
    res.send("user added successfully!");
  } catch {
    res.status(500).send("something went wrong");
  }
});

connectDb()
  .then(() => {
    console.log("database connnected successfully");
    app.listen(3000, (req, res) => {
      console.log("server is started");
    });
  })
  .catch((err) => {
    console.error("errororororo");
  });
