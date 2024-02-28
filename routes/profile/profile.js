const express = require('express')
const { handleStudentProfilePost, handleStudentProfileGet } = require('../../controllers/studentProfile')
const {
  handleTeacherProfilePost,
  handleTeacherProfileGet,
} = require('../../controllers/teacherProfile')

const router = express.Router()

router.post('/student', handleStudentProfilePost)
router.get('/student', handleStudentProfileGet)


router.post('/teacher', handleTeacherProfilePost)
router.get('/teacher', handleTeacherProfileGet)

module.exports = router


