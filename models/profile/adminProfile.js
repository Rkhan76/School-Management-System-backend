const mongoose = require('mongoose')

const adminProfileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  gender: ['Male', 'Female', 'Other'],
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phoneNumber:{
    type: String,
    require: true,
  },
  role:{
    type: String,
    require: true,
  }
},{ timestamps: true})


const AdminProfile = mongoose.model('adminProfile', adminProfileSchema)

module.exports = AdminProfile