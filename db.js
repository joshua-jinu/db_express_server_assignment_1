const mongoose = require('mongoose');

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log('Connected to database');
        })
        .catch((err)=>{
            console.log(`Error connecting to database: ${err}`);
        })
}

module.exports = connectDB;