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

const TeacherAttendance = mongoose.model('Attendance', teacherAttendanceSchema)

module.exports = TeacherAttendance
