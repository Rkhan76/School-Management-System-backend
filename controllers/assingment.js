const Assignment = require('../models/assignment')

async function handleAssignAssignmentToStudents(req, res) {
  const body = req.body
  if (!body) return res.status(400).json({ error: 'Please input data' })

  const { title, description, deadline, subject, className, assignmentCode, year, teacherEmail } =
    body

  if (!title || !description || !subject || !className) {
    return res
      .status(400)
      .json({ error: 'Missing required fields in the input data' })
  }

  const updateData = {
    title,
    description,
    subject,
    className,
    year,
    teacherEmail
  }

  if (deadline) {
    updateData.deadline = deadline
  }

  try {
    const assignment = await Assignment.findOneAndUpdate(
      { assignmentCode },
      updateData,
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
  const { year, email } = req.headers
  if (!email || !year) return res.status(400).json({ error: 'Please input data' })
  
  console.log(year)
  console.log(email)

  try {
    const viewAssignments = await Assignment.find({
      year, teacherEmail: email
    })
    console.log(viewAssignments)
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
