require('dotenv').config()
const jwt = require('jsonwebtoken')

const generateAccessToken = (email) => {
   const result = jwt.sign({data: email}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 8640000 }) //1 day in miliseconds (until refresh is done)
   console.log('***************** ACCESS TOKEN **************')
   console.log(result)
   return result
}

const generateRefreshToken = (email) => {
   const result = jwt.sign({data: email}, process.env.REFRESH_TOKEN_SECRET)
   console.log('***************** REFRESH TOKEN **************')
   console.log(result)
   return result
}

module.exports = {
   generateAccessToken,
   generateRefreshToken
}