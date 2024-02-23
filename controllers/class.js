const Class = require('../models/class')
const StudentProfile = require('../models/profile/studentProfile')

const classes = async (StudentClass, email) => {
  try {
    const id = await StudentProfile.findOne({ email }).select('_id')
    console.log(id)
    
    const result = await Class.create({
      className: StudentClass,
      studentId: id,
    })
 

  } catch (error) {
    console.error('Error retrieving student profile:', error)
    return error
  }
}


module.exports = {
    classes
}


