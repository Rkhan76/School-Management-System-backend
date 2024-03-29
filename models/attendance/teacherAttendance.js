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

const TeacherAttendance = mongoose.model('teacherAttendance', teacherAttendanceSchema)

module.exports = TeacherAttendance
