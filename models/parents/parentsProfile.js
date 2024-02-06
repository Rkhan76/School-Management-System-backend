const mongoose = require('mongoose')

const parentsProfileSchema = new mongoose.Schema({
      firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  }
}, { timestamps: true })

const parentsProfile = mongoose.model('parentsProfile',parentsProfileSchema)

module.exports = parentsProfile