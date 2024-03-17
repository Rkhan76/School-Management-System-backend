const mongoose = require("mongoose")

const resultSchema = new mongoose.Schema({
  year: {
    type: Number,
    require: true,
  },
  email: {
    type: Number,
    require: true,
    unique: true,
  },
  studentClass: {
    type: Number,
    require: true,
  },
  result: [
    {
      subjectName: {
        type: String,
        required: true,
      },
      subjectCode: {
        type: String,
        required: true,
      },
      internalMarks: {
        type: Number,
        required: true,
      },
      totalInternalMarks: {
        type: Number,
        required: true,
      },
      externalMarks: {
        type: Number,
        required: true,
      },
      totalExternalMarks: {
        type: Number,
        required: true,
      },
    },
  ],
})

const StudentResult = mongoose.Model('studentResult', resultSchema)

module.exports = StudentResult