const jwt = require('jsonwebtoken')
const secret = 'iamhere123'

function setUser(userPayload){
    console.log(userPayload)
    return jwt.sign(userPayload, secret)
}

function getUser(id){
  console.log('hey there');
}


module.exports = {
    setUser,
    getUser,
}