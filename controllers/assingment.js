const Assignment = require('../models/assignment')
// const Class = require('../models/class')
const StudentProfile = require('../models/profile/studentProfile')

async function handleAssignAssignmentToStudents(req, res) {
  const body = req.body
  if (!body) return res.status(400).json({ error: 'Please input data' })

  const { title, description, deadline, subject, className, assignmentCode } = body

  if (!title || !description || !deadline || !subject || !className) {
    return res
      .status(400)
      .json({ error: 'Missing required fields in the input data' })
  }

  try {
    const assignment = await Assignment.findOneAndUpdate(
      { assignmentCode },
      { title, description, deadline, subject, className }, // Use classInfo._id as class is a reserved keyword
      { upsert: true, new: true }
    )

    return res.status(200).json({
      message: 'Assignment assigned successfully',
      assignment,
    })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

async function handleViewAssignments(req, res) {
  const body = req.body
  if (!body) return res.status(400).json({ error: 'Please input data' })

  const { email, className } = body
  if (!(email || className)) {
    return res
      .status(400)
      .json({ error: 'Missing required fields in the input data' })
  }

  try {
    let studentClassName = className // Initialize studentClassName with className directly

    if (email) {
      const studentData = await StudentProfile.findOne({ email })
      if (!studentData) {
        return res.status(404).json({ error: 'Student profile not found' })
      }
      studentClassName = studentData.studentClass
    }

    const viewAssignments = await Assignment.find({
      className: studentClassName,
    })
    return res.status(200).json({ assignments: viewAssignments })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}


module.exports = {
  handleAssignAssignmentToStudents,
  handleViewAssignments,
}
