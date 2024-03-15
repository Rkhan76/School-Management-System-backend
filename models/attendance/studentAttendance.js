const mongoose = require('mongoose')

const studentAttendanceSchema = new mongoose.Schema({
    year:{
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
    }
    
  },{ timestamps: true});


const StudentAttendance = mongoose.model(
  'studentAttendance',
  studentAttendanceSchema
)

module.exports = StudentAttendance
