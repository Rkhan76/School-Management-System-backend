const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors') // Import CORS middleware
const { connectToMongoDB } = require('./connection')

const profile = require('./routes/profile/profile')
const user = require('./routes/user')
const attendance = require('./routes/attendance/attendance')
const assignment = require('./routes/assignment')
// const classData = require('./routes/class')


const app = express()
const port = 8000

// Use CORS middleware to allow requests from client origin
app.use(cors())



connectToMongoDB('mongodb://127.0.0.1:27017/School-Management-System').then(() =>
  console.log('MongoDB is connected')
)



// Parse JSON bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.use('/profile', profile)
app.use('/attendance',attendance)
app.use('/assignment', assignment)
// app.use('/class',classData)
app.use('/', user)


app.get('/', (req, res) => {
  return res.send('<h1>Hello</h1>')
})
app.get('/class', (req, res) => {
  return res.send('<h1>Hello</h1>')
})



app.listen(port, () => {
  console.log(`Server is started on port ${port}`)
})
