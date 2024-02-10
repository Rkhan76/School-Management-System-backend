const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors') // Import CORS middleware
const { connectToMongoDB } = require('./connection')

const app = express()
const port = 3000

// Use CORS middleware to allow requests from client origin
app.use(cors())

// Parse JSON bodies
app.use(bodyParser.json())

connectToMongoDB('mongodb://127.0.0.1:27017/School_Management_System').then(
  () => {
    console.log('MongoDB connected')
  }
)

app.get('/', (req, res) => {
  return res.send('<h1>Hello</h1>')
})

app.post('/update-studentprofile', (req, res) => {
  // Access JSON data from req.body
  const { name, email, rollNumber } = req.body

  // Handle the form data (e.g., save to database)
  console.log('Received form data:', { name, email, rollNumber })

  // Respond with JSON data
  return res.json({ message: 'Form data received' })
})

app.listen(port, () => {
  console.log(`Server is started on port ${port}`)
})
