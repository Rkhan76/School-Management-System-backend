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
  const { year, email, studentClass } = req.body

    if (!email) {
      return res.status(400).json({ msg: 'Please provide student email' })
    }

    const query = { email }
    if(year) query.year = year
    if(studentClass) query.studentClass = studentClass


  try {
    const result = await Result.findOne(query)

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
