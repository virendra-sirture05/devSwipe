const express = require("express");
const app = express();
const connectDb = require('./config/database')
const User = require('./models/user')

app.post('/signup',async(req,res)=>{
    const userObj = {
        firstName : "salman",
        lastName : "khan",
        email : "v@gmail.com",
        password : '1234'
    }

    const user = new User(userObj);
    await user.save();
    res.send('user added successfully!')

})

connectDb().then(()=>{
    console.log('database connnected successfully');
    app.listen(3000, (req, res) => {
        console.log("server is started");
    });
})
.catch((err)=>{
    console.error('errororororo');
})


