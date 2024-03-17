const mongoose = require("mongoose")

const resultSchema = new mongoose.Schema({
  year: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
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
    },
  ],
})

const Result = mongoose.model('result', resultSchema)

module.exports = Result