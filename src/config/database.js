// r29XmO7ihL0LAgWT
const mongoose = require('mongoose');

const connectDb = async() =>{
    await mongoose.connect(process.env.DB_CONNECTION_SECRET)
}

module.exports = connectDb

