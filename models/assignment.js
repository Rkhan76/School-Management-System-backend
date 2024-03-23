const mongoose = require('mongoose')

const assignmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: false,
    },
    subject: {
      type: String,
      require: true,
    },
    className: {
      type: Number,
      require: true
    },
    year: {
      type: Number,
      require: true
    },
    assignmentCode: {
      type: String,
      unique: true,
      required: true,
    },
    teacherEmail: {
      type: String,
      require: true,
    },
    submission: [
      {
        studentEmail: {
          type: String,
          require: true
        },
        studentName :{
          type: String,
          require: true
        },
        submission: {
          type: Boolean,
          default: null,
        },
        submittedAt: {
          type: Date, // Date type for submission timestamp
          default: Date.now, // Set the default value to the current timestamp
        },
        status: {
          type: String,
          enum: ['assigned', 'submitted', 'late', 'graded'],
          default: 'assigned',
        },
      },
    ],
  },
  { timestamps: true }
) 

const Assignment = mongoose.model('assignment', assignmentSchema)

module.exports = Assignment
