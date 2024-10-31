const express = require("express");
const app = express();

app.get('/user',(req,res)=>{
    try {
        throw new Error('12345y');
        res.send('user data sent')
    } catch (error) {
        res.status(500).send('Some error occured')
    }
})

app.use('/',(err,req,res,next)=>{
    if(err){
        res.status(500).send('something went wrong')
    }
})

app.listen(3000, (req, res) => {
  console.log("server is started");
});
