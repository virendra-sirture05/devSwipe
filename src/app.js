const express = require("express");
const app = express();

const {adminAuth, userAuth} = require('./middleware/auth')

app.use('/admin',adminAuth);

app.get('/user',(req,res)=>{
    res.send('user login')
})
app.get('/user/dash',userAuth,(req,res)=>{
    res.send('user dashboard')
})

app.get('/admin/getAllData',adminAuth,(req,res)=>{
    res.send('all data sent')
})

app.get('/admin/DeleteAllData',(req,res)=>{
   res.send('deleted data');
})

app.listen(3000, (req, res) => {
  console.log("server is started");
});
