const mongoose = require('mongoose')

const teacherAttendanceSchema = new mongoose.Schema({
  year: Number,
  month: Number,
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'TeacherProfile',
  },
  attendanceSchema: [],
})

const Attendance = mongoose.model('Attendance', attendanceSchema)

module.exports = TeacherAttendance
