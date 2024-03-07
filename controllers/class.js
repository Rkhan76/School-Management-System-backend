const Class = require('../models/class')
const StudentProfile = require('../models/profile/studentProfile')


const classes = async (StudentClass, email) => {
  try {
    const id = await StudentProfile.findOne({ email }).select('_id')
    
    const result = await Class.create({
      className: StudentClass,
      studentId: id,
    })

  } catch (error) {
    console.error('Error retrieving student profile:', error)
    return error
  }
}

// const handleClassGet = async(req, res)=>{
//   const selectedclass = parseInt(req.headers.selectedclass);


//   try{
//     const classData = await Class.find({
//       className: selectedclass
//     })
//     console.log(classData)

//     const classTotalStudent = await StudentProfile.find()
//   }catch(error){
//     console.error("Error getting class data :", error)
//   }
// }




module.exports = {
    classes,
    
}


