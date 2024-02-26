const TeacherProfile = require('../models/profile/teacherProfile')

async function handleTeacherProfilePost(req, res) {
  const body = req.body
  if (!body) return res.status(400).json({ error: 'Data not received' })

  try {
    const {
      teacherId,
      firstName,
      lastName,
      gender,
      email,
      classTeacher,
      phoneNumber,
      address,
    } = body

  

    const profileDetail = await TeacherProfile.findOneAndUpdate(
      { email: email },
      {
        teacherId,
        firstName,
        lastName,
        gender,
        classTeacher,
        phoneNumber,
        address,
      },
      { upsert: true, new: true } // Options to create a new profile if it doesn't exist
    )

    return res
      .status(201)
      .json({ message: 'Teacher profile created successfully', profileDetail })
  } catch (error) {
    console.error('Error creating teacher profile: ', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

async function handleTeacherProfileGet(req, res) {
  try {
    const profileDetail = await TeacherProfile.find({})
    return res.json(profileDetail)
  } catch (error) {
    console.error('Error fetching teacher profiles: ', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = {
  handleTeacherProfilePost,
  handleTeacherProfileGet,
}
