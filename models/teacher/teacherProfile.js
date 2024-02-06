const mongoose = require('mongoose')

const teacherProfileSchema = new mongoose.Schema({
  _id: {
    type: String,
    require: true,
    unique: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  gender: ['Male', 'Female', 'Other'],
  email:{
    type: String,
    require: true,
    unique: true,
  },
  classTeacher: {
    type: String,
    require: false,
  },
  phoneNumber:{
    type: Number,
    require: true,
  },
  address:{
    type: String,
    require: true,
  }

})

const teacherProfile = mongoose.model('teacherProfile', teacherProfileSchema)

module.exports = teacherProfile