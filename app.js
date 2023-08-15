const express = require('express')
const dotenv = require('dotenv').config()
const errorHandler = require('./middleware/errorMid')
const port = process.env.PORT || 5000
const connectDB = require('./config/db')

connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/goals', require('./routes/goalRoutes'))
// console.log('hello')
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`)
})
