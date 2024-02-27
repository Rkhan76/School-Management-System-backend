const mongoose = require('mongoose')

const studentAttendanceSchema = new mongoose.Schema({
    year: {
      type: Number,
      require: true
    },
    month: {
      type: Number,
      require: true
    },
    className:{
      type: Number,
      require: true,
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StudentProfile"
    },
    attendance: []
    
  },{ timestamps: true});


const StudentAttendance = mongoose.model(
  'studentAttendance',
  studentAttendanceSchema
)

module.exports = StudentAttendance