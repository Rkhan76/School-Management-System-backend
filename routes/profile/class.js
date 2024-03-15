const express = require('express')


const router = express.Router()

router.get('/',handleClassGet)


module.exports = router