const express = require("express")
const mongooose = require("mongoose")


const eventRouter = require("./routes/event")
const placeRouter= require("./routes/place")
const postRouter = require("./routes/post")
const userRouter = require("./routes/user")

const app = express()

app.use(express.json())

app.use("/event",eventRouter)
app.use("/place",placeRouter)
app.use("/post",postRouter)
app.use("/user",userRouter)

mongooose.connect("mongodb://127.0.0.1:27017/WBH",()=>{
    console.log("Connected to data base")    
    app.listen(5000,()=>{
            console.log("Server started")
    })
})