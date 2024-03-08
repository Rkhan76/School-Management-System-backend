const mongoose = require('mongoose')

const studentAttendanceSchema = new mongoose.Schema({
    year: {
      type: Number,
      required: true
    },
    className:{
      type: Number,
      required: true,
    },
    email:{
      type: String,
      require: true,
    },
    attendance: {
      Jan: [],
      Feb: [],
      Mar: [],
      Apr: [],
      May: [],
      Jun: [],
      Jul: [],
      Aug: [],
      Sep: [],
      Oct: [],
      Nov: [],
      Dec: [],
    }
    
  },{ timestamps: true});


const StudentAttendance = mongoose.model(
  'studentAttendance',
  studentAttendanceSchema
)

module.exports = StudentAttendance
