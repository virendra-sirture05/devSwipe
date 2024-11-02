const express = require("express");
const app = express();
const connectDb = require("./config/database");
const User = require("./models/user");
app.use(express.json());

app.delete('/delete',async(req,res)=>{
  const userid = req.body.id;
  try {
    const user = await User.findByIdAndDelete({_id : userid})
    res.send('user deleted successfully')
  } catch (error) {
    res.status(400).send('something went wrong')
  }
})

app.patch('/user',async (req,res)=>{
  const userId = req.body.id;
  const data = req.body;
  try {
    const user = await User.findByIdAndUpdate({_id: userId},data,{
      returnDocument:'after'
    })
    console.log(user);
    res.send('user updated successfully');
  } catch (error) {
    res.status(400).send('something went wrong')
  }
})

app.put('/userP',async(req,res)=>{
  const userEmail = req.body.email;
  const data = req.body;
  try {
    const user = await User.findOneAndUpdate({email : userEmail},data)
    res.send('updated')
  } catch (error) {
    res.status(400).send('something went wrong')
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
