const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports.auth = async (req, res, next) => {
   let user = { isAuthenticated: false }
   if (req.headers.authorization && req.headers.authorization !== null) {
      try {
         let jwtData = jwt.verify(
            req.headers.authorization.replace('Bearer ', ''),
            process.env.AUTH_SECRET
         )
         let userData = await User.findOne({
            email: jwtData.email,
            hash: jwtData.hash,
         }).catch((err) => console.error(err))
         user.isAuthenticated = userData ? true : false
         user.data = userData
      } catch (err) {
         user.isAuthenticated = false
         user.data = null
      }
   }
   
   req.user = user
   next()
}

module.exports.apiAuth = async (req, res, next) => {
   let user = { isAuthenticated: false }
   if (req.headers['x-api-key'] && req.headers['x-api-key'] !== null) {
      try {
         let apiKey = req.headers['x-api-key']
         let userData = await User.findOne({
            apiKey: apiKey,
         }).catch((err) => console.error(err))
         user.isAuthenticated = userData ? true : false
         user.data = userData
      } catch (err) {
         user.isAuthenticated = false
         user.data = null
      }
   }
   req.user = user
   next()
}
