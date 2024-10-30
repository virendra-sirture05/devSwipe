const express = require('express')
const app = express()


app.get('/user',(req,res)=>{
    res.send({firstName : "Virendra", lastName : "Sirture"})
})

app.post("/user",(req,res)=>{
    res.send('data created succesfully')
})
app.delete('/user',(req,res)=>{
    res.send('data deleted');
})
app.put("/user",(req,res)=>{
    res.send('data has put');
})

app.use('/test',(req,res)=>{
    res.send('text')
})
app.listen(3000,(req,res)=>{
    console.log('server is started');
})