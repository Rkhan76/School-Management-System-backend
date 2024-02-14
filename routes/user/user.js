const express = require('express')
const {handleUserSignUp, handleSignIn} = require('../../controllers/user/user')

const router = express.Router()

router.post('/signup', handleUserSignUp)
router.post('/signin', handleSignIn)


module.exports = router