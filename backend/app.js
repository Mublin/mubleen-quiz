const express = require('express')
const userRoute = require('./routes/userRoutes')
const dotenv = require('dotenv')
const cors = require('cors')
const quizRoute = require('./routes/quizRoute')
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/users', userRoute)
app.use('/api/quiz', quizRoute)
app.listen(process.env.PORT, ()=>{
    console.log(`port is listening to ${process.env.PORT}`)
})