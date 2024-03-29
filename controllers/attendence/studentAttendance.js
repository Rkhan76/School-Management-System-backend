const StudentAttendance = require('../../models/attendance/studentAttendance')



  async function handleStudentAttendancePost(req, res){
    const body = req.body
    if(!body){
        return res.status(400).json({ error: 'Please Input data' })
    }

    const {
      year: year,
      className: className,
      email: email,
      attendance: attendance,
    } = body

    if(!year || !email || !className){
        return res
          .status(400)
          .json({ error: 'Missing required fields in the input data' })
    }

    try{
        const studentAttendance = await StudentAttendance.findOneAndUpdate(
          { email },
          { year, className, email, attendance },
          { upsert: true, new: true }
        )

             return res.status(200).json({
               message: 'Student attendance updated/created successfully',
               studentAttendance,
             })
    }catch(error){
        console.error('Error:', error)
        return res.status(500).json({ error: 'Internal server error' })
    }
  }

//   async function handleStudentAttendanceGet(req, res){
//      const body = req.body
//      if (!body) {
//        return res.status(400).json({ error: 'Please Input data' })
//      }

//        const { year, month, className, studentId } = body

//        // Check if at least one of the required fields is present
//        if (!year && !month && !className && !studentId) {
//          return res
//            .status(400)
//            .json({
//              error: 'Please provide at least one of the required fields',
//            })
//        }

//        if (year && !month && !className && !studentId) {
//          const attendanceByYear = await StudentAttendance.find({ year })
//          if (attendanceByYear.length === 0) {
//            return res
//              .status(404)
//              .json({
//                error: 'No attendance records found for the specified year',
//              })
//          }
//          return res.status(200).json({ attendance: attendanceByYear })
//        }

//        if(year && month){
//         const attendanceByMonth = await StudentAttendance.find({
//           year: year,
//           month: month,
//         })
//         if (attendanceByMonth.length === 0) {
//           return res.status(404).json({
//             error: 'No attendance records found for the specified month',
//           })
//         }
//         return res.status(200).json({ attendance: attendanceByMonth })
//        }

//        if (year && !month && className && !studentId) {
//          const attendanceByClassName = await StudentAttendance.find({
//            year: year,
//            className: className,
//          })
//          if (attendanceByClassName.length === 0) {
//            return res.status(404).json({
//              error: 'No attendance records found for the specified Class',
//            })
//          }
//          return res.status(200).json({ attendance: attendanceByClassName })
//        }

//        if (year && studentId) {
//          const attendanceByStudentId = await StudentAttendance.find({
//            year: year,
//            StudentId: StudentId
//          })
//          if (attendanceByStudentId.length === 0) {
//            return res.status(404).json({
//              error: 'No attendance records found for the specified Class',
//            })
//          }
//          return res.status(200).json({ attendance: attendanceByStudentId })
//        }
       


//   }


async function handleStudentAttendanceGet(req, res) {
  console.log(req.headers.year)
  console.log(req.headers.studentemail)
  
  
  let { year, studentemail } = req.headers
  year = parseInt(year)


  if (!year && !studentemail) {
    return res
      .status(400)
      .json({ error: 'Please provide at least one of the required fields' })
  }

  let query = { year }

 
  // if (className) query.className = className
  if (studentemail) query.email = studentemail

  console.log(query)
  try {
    const attendanceRecords = await StudentAttendance.find(query)
    if (attendanceRecords.length === 0) {
      return res
        .status(404)
        .json({
          error: 'No attendance records found for the specified criteria',
        })
    }
    //  console.log(attendanceRecords)
    return res.status(200).json({ attendance: attendanceRecords })
    
  } catch (error) {
    console.error('Error fetching attendance records:', error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

module.exports = {
  handleStudentAttendanceGet,
  handleStudentAttendancePost,
}

