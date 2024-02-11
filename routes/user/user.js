const express = require('express')
const {handleUserSignUp, handleSignIn} = require('../../controllers/user/user')

const router = express.Router()

router.post('/signup', handleUserSignUp)
router.get('/signin', handleSignIn)


module.exports = router