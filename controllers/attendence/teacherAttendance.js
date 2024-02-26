const TeacherAttendance = require('../../models/attendance/teacherAttendance')
const TeacherProfile = require('../../models/profile/teacherProfile')


async function handleTeacherAttendanceGet(req, res){
    
}

async function handleTeacherAttendancePost(req, res) {
  const body = req.body
  if (!body) return res.status(400).json({ error: 'Input data is not right' })

  const { year, month, teacherId, attendanceSchema } = body

  if (!year || !month || !teacherId || !attendanceSchema) {
    return res
      .status(400)
      .json({ error: 'Missing required fields in the input data' })
  }

  try {
    const teacherProfile = await TeacherProfile.findOne({ teacherId }) // Find the TeacherProfile
    if (!teacherProfile) {
      return res.status(404).json({ error: 'Teacher profile not found' })
    }

    const teacherAttendance = await TeacherAttendance.findOneAndUpdate(
      { teacherId: teacherProfile._id }, // Use teacherProfile._id
      { year, month, teacherId: teacherProfile._id, attendanceSchema }, // Use teacherProfile._id
      { upsert: true, new: true } // Upsert the document if not found, and return the modified document
    )

    return res.status(200).json({
      message: 'Teacher attendance updated/created successfully',
      teacherAttendance,
    })
  } catch (error) {
    console.error('Error:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}


module.exports = {
    handleTeacherAttendanceGet,
    handleTeacherAttendancePost,
}