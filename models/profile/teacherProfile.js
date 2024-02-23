const mongoose = require('mongoose')

const teacherProfileSchema = new mongoose.Schema({
  teacherId: {
    type: String,
  },
  firstName: {
    type: String,
    
  },
  lastName: {
    type: String,
    
  },
  gender:{
    type: String,
    
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
    type: String,
    
  },
  address:{
    type: String,
   
  }

},{ timestamps: true })

const TeacherProfile = mongoose.model('teacherProfile', teacherProfileSchema)

module.exports = TeacherProfile