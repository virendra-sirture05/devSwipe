const express = require("express");
const app = express();
const connectDb = require("./config/database");
const User = require("./models/user");
app.use(express.json());

app.get('/userById',async(req,res)=>{
  const userId = req.body.Id
  try {
    const user = await User.find({_id :userId});
    res.send(user);
  } catch (error) {
    res.status(400).send('something went wrong')
  }
})

app.get('/userFirst',async (req,res)=>{
  const userEmail = req.body.email;
  try {
    const user = await User.findOne({email : userEmail})
    res.send(user);
  } catch (error) {
    res.status(400).send("something went wrong")
  }
})

app.get('/user', async (req,res)=>{
  const userEmail = req.body.email;
  try {
    const user = await User.find({email : userEmail});
    if(user.length == 0){
      res.status(404).send('user not found')
    }
    else
    res.send(user);
  } catch (error) {
    res.status(400).send('something went wrong')
  }
})

app.get('/feed', async (req,res)=>{
  try {
    const users = await User.find({})
  res.send(users);
  } catch (error) {
    res.status(400).send("something went wrong")
  }
  
})

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
