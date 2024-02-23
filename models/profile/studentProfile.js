const mongoose = require('mongoose')

const studentProfileSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
    },
    firstName: {
      type: String,
      
    },
    lastName: {
      type: String,

    },
    gender: {
      type: String,
      
    },
    fatherName: {
      type: String,
      
    },
    motherName: {
      type: String,
      
    },
    dateOfBirth: {
      type: Date,
      
    },
    religion: {
      type: String,
      
    },
    fatherOccupation: {
      type: String,
      
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    admissionDate: {
      type: Date,
      
    },
    studentClass: {
      type: Number,
      
    },
    section: {
      type: String,
      
    },
    house: {
      type: String,
      
    },
    rollNo: {
      type: String,
      
    },
    address: {
      type: String,
      
    },
    phoneNumber: {
      type: String, 
    },
  },
  { timestamps: true }
)

const StudentProfile = mongoose.model('studentProfile', studentProfileSchema)

module.exports = StudentProfile