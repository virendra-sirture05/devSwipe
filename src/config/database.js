// r29XmO7ihL0LAgWT
const mongoose = require('mongoose');

const connectDb = async() =>{
    await mongoose.connect("mongodb+srv://virendrasirture05:r29XmO7ihL0LAgWT@namastenode2.72jxw.mongodb.net/")
}

module.exports = connectDb

