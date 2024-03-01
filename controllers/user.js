const bcrypt = require('bcrypt')
const User = require('../models/user')
const { setUser } = require('../services/auth')
const {handleStudentProfilePost} = require('../controllers/studentProfile')
const StudentProfile = require('../models/profile/studentProfile')
const TeacherProfile = require('../models/profile/teacherProfile')
const ParentsProfile = require('../models/profile/parentsProfile')
const AdminProfile = require('../models/profile/adminProfile')

const secretKey = '94124'

async function handleUserSignUp(req, res) {
  try {
    const { username, email, password, role, secretKeyInput } = req.body

    if (!username || !email || !password || !role) {
      return res.status(400).json({ error: 'Required fields missing' })
    }

    if (role === 'admin' && secretKey !== secretKeyInput) {
      return res.status(401).json({ message: 'Incorrect secret key' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const userDetail = await User.create({
      role,
      username,
      email,
      password: hashedPassword,
    })

    console.log(role)
   
    // switch (role) {
    //   case 'student':
    //     await StudentProfile.create({
    //       firstName: null,
    //       lastName: null,
    //       gender: null,
    //       fatherName: null,
    //       motherName: null,
    //       dateOfBirth: null,
    //       religion: null,
    //       fatherOccupation: null,
    //       email: email,
    //       admissionDate: null,
    //       StudentClass: null,
    //       section: null,
    //       house: null,
    //       rollNo: null,
    //       session: null,
    //       address: null,
    //       phoneNumber: null,
    //     })
    //     console.log('hllo')
    //     res.status(201).json({message: "student profile created"})
    //     break
    //   case 'teacher':
    //     await TeacherProfile.create({
    //       teacherId: null,
    //       firstName: null,
    //       lastName: null,
    //       gender: null,
    //       email: email,
    //       classTeacher: null,
    //       phoneNumber: null,
    //       address: null,
    //     })
    //     break
    //   case 'parents':
    //     await ParentsProfile.create({
    //       email,
    //     })
    //     break
    //   case 'admin':
    //     await AdminProfile.create({
    //       email,
    //     })
    //     break
    // }
    return res
      .status(201)
      .json({ message: 'User signed up successfully', userDetail })
  } catch (error) {
    console.error('Error in user signup:', error)
    // if (error.code === 11000) {
    //   return res.status(400).json({ error: 'Email already exists' })
    // }
    return res.status(500).json({ error: 'Internal server error' })
  }
}


async function handleSignIn(req, res) {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' })
    }

    const userDetail = await User.findOne({ email })
    if (!userDetail) {
      return res.status(404).json({ message: 'User not found' })
    }

    const passwordMatch = await bcrypt.compare(password, userDetail.password)
    if (passwordMatch) {
      const userPayload = {
        email: userDetail.email,
      }

      const token = setUser(userPayload)
      

      const role = userDetail.role

      res.cookie('uid', token)
      return res.status(200).json({ message: 'Login successful', role, email, token })
    } else {
      return res.status(401).json({ message: 'Invalid password' })
    }
  } catch (error) {
    console.error('Error with user signin:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = {
  handleUserSignUp,
  handleSignIn,
}
