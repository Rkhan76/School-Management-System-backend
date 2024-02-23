const express = require('express')
const {
  handleTeacherProfilePost,
  handleTeacherProfileGet,
} = require('../controllers/teacherProfile')

const router = express.Router()

router.post('/profile', handleTeacherProfilePost)
router.get('/profile', handleTeacherProfileGet)

module.exports = router
