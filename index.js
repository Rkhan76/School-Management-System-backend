const express = require('express')
const bodyParser = require('body-parser')

const { connectToMongoDB } = require('./connection')

const app = express()
const port = 3000


app.use(bodyParser.urlencoded({ extended: true }))

connectToMongoDB('mongodb://127.0.0.1:27017/School_Management_System').then(
  () => {
    console.log('MongoDB connected')
  }
)


app.get('/', (req, res) => {
  return res.send('<h1>Hello</h1>')
})

app.patch('/update-studentprofile',(req, res) => {
  console.log(req)
})





app.listen(port, ()=>{
    console.log(`server is started on port ${port}`)
})