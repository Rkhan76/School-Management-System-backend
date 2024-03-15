const mongoose = require('mongoose')

const studentAttendanceSchema = new mongoose.Schema({
    : {
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
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
      10: [],
      11: [],
      12: [],
    }year
    
  },{ timestamps: true});


const StudentAttendance = mongoose.model(
  'studentAttendance',
  studentAttendanceSchema
)

module.exports = StudentAttendance
