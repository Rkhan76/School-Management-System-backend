const Result = require('../models/result')

const handleStudentResultPost = async (req, res) => {
  const { year, email, studentClass, result: resultData } = req.body

  if (!year || !email || !studentClass || !resultData) {
    return res
      .status(400)
      .json({
        msg: 'Please provide all required fields: year, email, studentClass, result',
      })
  }

  try {
    const result = await Result.findOneAndUpdate(
      { email },
      { year, email, studentClass, result: resultData },
      { upsert: true, new: true }
    )

    return res.status(200).json({
      message: 'Student result updated/created successfully',
      result,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}

const handleStudentResultGet = async (req, res) => {
  console.log(req.headers)
  const {year, studentemail } = req.headers // corrected variable name to studentclass
  // console.table(year, studentemail, studentclass)

  // console.log(year)
  // console.log(typeof year)
  // console.log(studentemail)
  // console.log(typeof studentemail)
  // console.log(studentclass)
  // console.log(typeof studentclass)

  if (!studentemail) {
    return res.status(400).json({ msg: 'Please provide student email' })
  }

  const query = { email: studentemail }
  if (year) query.year = year
  // if (studentclass) query.studentClass = studentclass // corrected variable name to studentclass
  console.log(query)

  try {
    const result = await Result.find(query)

    console.log(result)

    return res.status(200).json({
      message: 'Find student result successfully',
      result,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}


module.exports = {
  handleStudentResultPost,
  handleStudentResultGet
}
