const StudentProfile = require('../../models/student/studentProfile')
const { classes } = require('../class')

async function handleStudentProfile(req, res) {
  const body = req.body
  if (!body) return res.status(400).json({ error: 'Data not received' })

  try {
    // Extract relevant fields from the request body
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
      StudentClass,
      section,
      house,
      rollNo,
      address,
      phoneNumber,
    } = body

    // Create a new instance of the StudentProfile model with the extracted data
    const profileDetail = await StudentProfile.findOneAndUpdate(
      // Filter based on the email field
      { email: email },
      // Update with the provided data
      {
        studentId,
        firstName,
        lastName,
        gender,
        fatherName,
        motherName,
        dateOfBirth,
        religion,
        fatherOccupation,
        admissionDate,
        StudentClass,
        section,
        house,
        rollNo,
        address,
        phoneNumber,
      },
      // Set the option to return the updated document
      { new: true, upsert: true }
    )

    // Send a success response with the created profile detail
    res
      .status(201)
      .json({
        message: 'Student profile created/updated successfully',
        profileDetail,
      })
  } catch (error) {
    // Handle any errors that occur during profile creation/update
    console.error('Error creating/updating student profile:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = {
  handleStudentProfile,
}
