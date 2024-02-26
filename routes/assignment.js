const express = require('express')
const {
  handleAssignAssignmentToStudents,
  handleViewAssignments,
} = require('../controllers/assingment')

const router = express.Router()


router.post('/', handleAssignAssignmentToStudents)
router.get('/', handleViewAssignments)
// router.get('/submit', handleAssignmentSubmission)


module.exports = router