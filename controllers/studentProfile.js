const StudentProfile = require('../models/profile/studentProfile')
const { classes } = require('./class')
const { httpStatusCode } = require('../constant/httpStatusCode')

async function handleStudentProfilePost(req, res) {
  const body = req.body

  // console.log(body)
  
  if (!body) return res.status(400).json({ error: 'Data not received' })

  try {
    const {
      studentId,
      firstName,
      lastName,
      gender,
      fatherName,
      motherName,
      dateOfBirth,
      religion,
      fatherOccupation,
      email,
      admissionDate,
      studentClass,
      section,
      house,
      rollNo,
      address,
      session,
      phoneNumber,
    } = body





    const profileDetail = await StudentProfile.findOneAndUpdate(
      { email: email },
      {
        studentId: studentId,
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        fatherName: fatherName,
        motherName: motherName,
        dateOfBirth: dateOfBirth,
        religion: religion,
        fatherOccupation: fatherOccupation,
        admissionDate: admissionDate,
        studentClass: studentClass,
        section: section,
        house: house,
        rollNo: rollNo,
        session: session,
        address: address,
        phoneNumber: phoneNumber,
      },
      { new: true, upsert: true }
    )

    if (studentClass) {
      try {
        const classResult = classes(studentClass, email)
        
      } catch (error) {
        // console.error(error)
      }
    }

    console.log(profileDetail)
    return res.status(201).json({ message: 'Student profile created/updated successfully' })
  } catch (error) {
    console.error('Error creating/updating student profile:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

async function handleStudentProfileGet(req, res) {
  const { authorization, email } = req.headers

  if (!email) {
    return res.status(400).json({
      success: false,
      message: 'Incomplete Data',
    })
  }

  try {
    const studentProfile = await StudentProfile.findOne({ email })

    if (!studentProfile) {
      return res.status(404).json({
        success: false,
        message: 'Profile not found',
      })
    }

    const { _id, createdAt, updatedAt, __v, ...filteredProfile } =
      studentProfile.toObject()

      // console.log(studentProfile)

    return res.status(200).json({
      success: true,
      message: 'Profile found',
      profile: filteredProfile,
    })
  } catch (error) {
    console.error('Error fetching student profile:', error)
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    })
  }
}


module.exports = {
  handleStudentProfileGet,
  handleStudentProfilePost,
};

