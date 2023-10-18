const express = require('express')
const userRoute = require('./routes/userRoutes')
const dotenv = require('dotenv')
const cors = require('cors')
const quizRoute = require('./routes/quizRoute')
const path = require('path')
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/users', userRoute)
app.use('/api/quiz', quizRoute)

app.use(express.static(path.join(__dirname, '../frontend/dist')))
app.get('*', (req,res)=>
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
)

app.listen(process.env.PORT, ()=>{
    console.log(`port is listening to ${process.env.PORT}`)
})