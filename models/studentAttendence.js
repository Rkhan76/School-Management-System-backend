const mongoose = require('mongoose')

const attendanceSchema = new mongoose.Schema({
    Month: Number,
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StudentProfile"
    },
    attendanceSchema: []
    
  });


const Attendance = mongoose.model('Attendance', attendanceSchema)

module.exports = Attendance;