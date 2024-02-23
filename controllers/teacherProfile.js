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

    const profileDetail = await TeacherProfile.create({
      teacherId,
      firstName,
      lastName,
      gender,
      email,
      classTeacher,
      phoneNumber,
      address,
    })

    res
      .status(201)
      .json({ message: 'Teacher profile created successfully', profileDetail })
  } catch (error) {
    console.log('Error creating student profile: ', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

async function handleTeacherProfileGet(req, res) {
  try {
    const profileDetail = await TeacherProfile.find({})
    console.log(profileDetail)
    res.json(profileDetail)
  } catch (error) {
    console.error('Error fetching teacher profiles: ', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = {
  handleTeacherProfilePost,
  handleTeacherProfileGet,
}
