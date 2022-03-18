const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports.register = async (req, res) => {
   const { name, email, password } = req.body

   try {
      // if any fields are missing
      if (!email || !password){
          return res.status(400).send("Fields missing")
      }

      // if the user is already registered
      const oldUser = await User.findOne({ email }).catch((err) => {
         console.error(err)
      })
      if (oldUser){
         return res.status(409).send("User already exists")
      }

      // saving new user to database
      let user = new User({ email, name })
      user.setPassword(password)

      let validationError = false
      await user.save().catch((err) => {
         validationError = true
         return res.sendStatus(400)
      })

      if (!validationError){
         return res.status(200).json({ 
            access_token: user.generateJWT(), 
            message: "User successfully registered",
            user : { name: user.name, email: user.email }
         })
      }
   } 
   catch (e) {
      console.log(e)
      return res.status(500).send("Internal Server Error")
   }
}

module.exports.login = async (req, res) => {
   const { email, password } = req.body;

   try {
      // if any fields are missing
      if (!email || !password){
         return res.status(400).send("Fields missing")
      }

      let user = await User.findOne({ email }).catch((err) =>
         console.error(err)
      )

      // if user is not registered
      if(!user){
         return res.status(404).send("User not found");
      }
      
      // if password doesn't match
      if(!user.validatePassword(password)){
         return res.status(401).send("Incorrect email or password");
      }

      return res.status(200).json({ 
         access_token: user.generateJWT(),
         message: "Logged In",
         user : { name: user.name, email: user.email }
      })
   } 
   catch (err) {
      console.log(err)
      return res.status(500).send("Internal Server Error")
   }
}


module.exports.authenticate = async (req, res) => {
   try {
      if (!req.user.isAuthenticated) {
         return res.status(401).send('Not Authenticated')         
      }

      const user = req.user.data
      
      return res.status(200).json({
         email: user.email,
         name: user.name
      })
   } catch (e) {
      console.log(e)
      return res.status(500).send("Internal Server Error")
   }
}
