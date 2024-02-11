const bcrypt = require('bcrypt')
const User = require('../../models/user/user')

async function handleUserSignUp(req, res) {
  const body = req.body
  if (!body) return res.status(400).json({ error: 'Data not received' })

  try {
    const { username, email, password } = body

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(hashedPassword);

    const userDetail = await User.create({
      username,
      email,
      password: hashedPassword,
    })

    return res
      .status(201)
      .json({ message: 'User signup successfully', userDetail })
  } catch (error) {
    console.log('Error in signup: ', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}

async function handleSignIn(req, res) {
  const body = req.body
  if (!body) return res.status(400).json({ error: 'Data not received' })

  try {
    const { email, password } = body

    const userDetail = await User.findOne({
      email: email,
    })

    if (!userDetail) {
      return res.status(404).json({ message: 'User not found' })
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, userDetail.password)

    if (passwordMatch) {
      return res.status(200).json({ message: 'You are ready to go' })
    } else {
      return res.status(401).json({ message: 'Invalid password' })
    }
  } catch (error) {
    console.log('Error with user signin: ', error)
    res.status(500).json({ error: 'Internal server error' })
  }
}


module.exports = {
  handleUserSignUp,
  handleSignIn,
}
