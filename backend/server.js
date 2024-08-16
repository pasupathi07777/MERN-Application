const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
require('dotenv').config()
const app=express()
app.use(express.json())
app.use(cors())

const taskRoute=require('./routes/taskRoutes')

app.use((req,res,next)=>{
    console.log("path"+req.path+"method"+req.method)
    next()
})


mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("DB CONNECTED")
    app.listen(process.env.PORT,()=>{
        console.log("server started")
    })
}).catch(()=>{
    console.log("DB Not Connected")
})


app.get('/',(req,res)=>{
    res.send("Hello World")

})

app.use('/api/tasks',taskRoute)


