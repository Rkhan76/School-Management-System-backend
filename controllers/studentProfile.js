const StudentProfile = require('../models/profile/studentProfile')
const { classes } = require('./class')

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

    if(studentClass){
      try{
        const classResult =  classes(studentClass,email)
      console.log(classResult)
      }catch(error){
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

module.exports = {
  handleStudentProfilePost,
}
