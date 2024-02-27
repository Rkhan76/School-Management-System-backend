const express = require('express')
const {
  handleAssignAssignmentToStudents,
  handleViewAssignments,
} = require('../controllers/assingment')

const router = express.Router()


router.post('/', handleAssignAssignmentToStudents)
router.get('/', handleViewAssignments)
// router.post('/submit', handleAssignmentSubmission)


module.exports = router