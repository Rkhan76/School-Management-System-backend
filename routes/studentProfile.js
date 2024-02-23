const express = require('express')
const { handleStudentProfile } = require('../controllers/studentProfile')

const router = express.Router()

router.post('/profile', handleStudentProfile)
router.get('/profile', handleStudentProfile)

module.exports = router
