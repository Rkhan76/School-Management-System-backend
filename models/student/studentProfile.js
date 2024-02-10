const mongoose = require('mongoose')

const studentProfileSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      require: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    religion: {
      type: String,
      required: true,
    },
    fatherOccupation: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    admissionDate: {
      type: Date,
      required: true,
    },
    StudentClass: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    house: {
      type: String,
      required: true,
    },
    rollNo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const StudentProfile = mongoose.model('studentProfile', studentProfileSchema)

module.exports = StudentProfile