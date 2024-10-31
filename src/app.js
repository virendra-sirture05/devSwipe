const express = require("express");
const app = express();

app.use(
  "/user",
  (req, res,next) => {
    console.log("handling respones 1");
    res.send("response 1");
    next()
  },
  (req, res,next) => {
    console.log("handling response 2");
    res.send("response 2");
    next()
  },
  (req,res,next)=>{
    console.log('handline response 3');
    // res.send('response 3');
    next()
  }
);

// app.get('/user',(req,res)=>{
//     res.send({firstName : "Virendra", lastName : "Sirture"})
// })
// app.get('/user/:id',(req,res)=>{
//     // console.log(req.query);
//     console.log(req.params.id);
//     res.send('done');
// })
// app.post("/user",(req,res)=>{
//     res.send('data created succesfully')
// })
// app.delete('/user',(req,res)=>{
//     res.send('data deleted');
// })
// app.put("/user",(req,res)=>{
//     res.send('data has put');
// })
// app.use('/test',(req,res)=>{
//     res.send('text')
// })

app.listen(3000, (req, res) => {
  console.log("server is started");
});
