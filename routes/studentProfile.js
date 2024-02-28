const express = require('express')
const { handleStudentProfilePost,  } = require('../controllers/studentProfile')

const router = express.Router()

router.post('/profile', handleStudentProfilePost)
// router.get('/profile', handleStudentProfileGet)

module.exports = router
