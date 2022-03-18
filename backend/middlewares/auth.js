const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports.auth = async (req, res, next) => {
   let user = { isAuthenticated: false }
   const authHeader = req.headers.authorization
   const token = authHeader.split(' ')[1]

   if (authHeader && token) {
      try {
         // throws error if token is invalid
         const jwtData = jwt.verify(token, process.env.AUTH_SECRET)
         console.log(jwtData);
         
         const userData = await User.findOne({
            email: jwtData.email,
            hash: jwtData.hash,
         }).catch((err) => console.error(err))
         
         console.log(`User data: ${userData}`);

         user.isAuthenticated = userData ? true : false
         user.data = userData
      } 
      catch (err) {
         user.isAuthenticated = false
         user.data = null
      }
   }

   req.user = user
   next()
}
