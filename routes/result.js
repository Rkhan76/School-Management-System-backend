const express = require('express')
const { handleStudentResultPost, handleStudentResultGet } = require('../controllers/result')

const router = express.Router()

router.get('/', handleStudentResultGet)
router.post('/', handleStudentResultPost)


module.exports = router