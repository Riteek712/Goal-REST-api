const mongoose = require('mongoose')

const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_TUT)

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB