const express = require('express')
const app = express()

// app.use('/',(req,res)=>{
//     res.send(' how are you?')
// })
app.use('/hello',(req,res)=>{
    res.send('heleleleleeeleel')
})
app.get('/home',(req,res)=>{
    res.send('this is home page')
})
app.use('/test',(req,res)=>{
    res.send('this is test')
})
app.listen(3000,(req,res)=>{
    console.log('server is started');
})