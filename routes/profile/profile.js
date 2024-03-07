const express = require('express')
const { handleStudentProfilePost, handleStudentProfileGet, handleGetStudentByClass } = require('../../controllers/studentProfile')
const {
  handleTeacherProfilePost,
  handleTeacherProfileGet,
} = require('../../controllers/teacherProfile')

const router = express.Router()

router.post('/student', handleStudentProfilePost)
router.get('/student', handleStudentProfileGet)
router.get('/class', handleGetStudentByClass)


router.post('/teacher', handleTeacherProfilePost)
router.get('/teacher', handleTeacherProfileGet)

module.exports = router


