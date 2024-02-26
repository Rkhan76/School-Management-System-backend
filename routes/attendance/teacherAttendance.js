const express = require('express')
const {handleTeacherAttendanceGet, handleTeacherAttendancePost} = require('../../controllers/attendence/teacherAttendance')


const router = express.Router()


router.get('/teacher', handleTeacherAttendanceGet)
router.post('/teacher',handleTeacherAttendancePost)


module.exports = router