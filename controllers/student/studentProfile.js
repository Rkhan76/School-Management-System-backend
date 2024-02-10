const StudentProfile = require('../../models/student/studentProfile')

async function handleStudentProfile(req, res) {
  const body = req.body
  if (!body) return res.status(400).json({ error: 'Data not received' })
 console.log(body)
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
    const profileDetail = await StudentProfile.create({
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
    })

    // Send a success response with the created profile detail
    res
      .status(201)
      .json({ message: 'Student profile created successfully', profileDetail })
  } catch (error) {
    // Handle any errors that occur during profile creation
    console.error('Error creating student profile:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}


module.exports = {
  handleStudentProfile,
}
