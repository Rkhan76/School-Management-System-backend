const express = require('express')

const { connectToMongoDB } = require('./connection')


connectToMongoDB('mongodb://127.0.0.1:27017/School_Management_System')
.then(()=>{ console.log('MongoDB connected')})

const app = express()
const port = 3000



app.listen(port, ()=>{
    console.log(`server is started on port ${port}`)
})