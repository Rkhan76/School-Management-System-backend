const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
    className: {
      type: Number,
    },
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StudentProfile",
    },
  
  });


const Class = mongoose.model('Class', classSchema)

module.exports = Class