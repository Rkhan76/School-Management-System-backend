const StudentProfile = require('../models/profile/studentProfile')
const { classes } = require('./class')
const { httpStatusCode } = require('../constant/httpStatusCode')

async function handleStudentProfilePost(req, res) {
  const body = req.body
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
        console.error(error)
      }
    }

    res.status(201).json({
      message: 'Student profile created/updated successfully',
      profileDetail,
    })
  } catch (error) {
    console.error('Error creating/updating student profile:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

async function handleStudentProfileGet(req, res) {
  // Extract token from the Authorization header
  const token = req.headers.authorization.split(' ')[1]; // Assuming the token is sent in the format 'Bearer <token>'
  console.log(token);

  // Extract email from the Email header
  const email = req.headers.email;
  console.log(email);

  // Check if email is present
  if (!email) {
    return res.status(400).json({
      success: false,
      message: 'Incomplete Data',
    });
  }

  // Fetch student profile based on the email
  try {
    const studentProfile = await StudentProfile.findOne({ email });
    console.log(studentProfile);

    // Return response with the student profile
    return res.status(200).json({
      success: true,
      message: 'Profile found',
      profile: studentProfile,
    });
  } catch (error) {
    console.error('Error fetching student profile:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
}

module.exports = {
  handleStudentProfileGet,
  handleStudentProfilePost,
};

