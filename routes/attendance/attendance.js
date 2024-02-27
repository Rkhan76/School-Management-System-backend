const express = require('express')
const {handleTeacherAttendanceGet, handleTeacherAttendancePost} = require('../../controllers/attendence/teacherAttendance')
const { handleStudentAttendanceGet, handleStudentAttendancePost} = require('../../controllers/attendence/studentAttendance')

const router = express.Router()


router.get('/teacher', handleTeacherAttendanceGet)
router.post('/teacher',handleTeacherAttendancePost)


router.get('/student', handleStudentAttendanceGet)
router.post('/student', handleStudentAttendancePost)


module.exports = router