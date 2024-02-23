const mongoose = require('mongoose')

const teacherProfileSchema = new mongoose.Schema({
  teacherId: {
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
  gender:{
    type: String,
    require: true,
  },
  email:{
    type: String,
    require: true,
    unique: true,
  },
  classTeacher: {
    type: String,
  },
  phoneNumber:{
    type: Number,
    require: true,
  },
  address:{
    type: String,
    require: true,
  }

},{ timestamps: true })

const TeacherProfile = mongoose.model('teacherProfile', teacherProfileSchema)

module.exports = TeacherProfile