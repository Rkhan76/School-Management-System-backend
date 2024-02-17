const express = require('express')
const {handleStudentProfile} = require('../../controllers/student/studentProfile')


const router = express.Router()

router.post('/profile', handleStudentProfile)
router.get('/profile',handleStudentProfile)

module.exports = router
