const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports.register = async (req, res) => {
   const { name, email, password } = req.body;

   try {
      // if any fields are missing
      if (!email || !password){
          return res.status(400).send("Fields missing")
      }

      // if the user is already registered
      let oldUser = await User.findOne({ email }).catch((err) => {
         console.error(err)
      })
      if (oldUser){
         return res.status(409).send('User already exists')
      }

      // saving new user to database
      let user = new User({ email })
      user.setPassword(password)

      let validationError = false
      await user.save().catch((err) => {
         validationError = true
         return res.sendStatus(400)
      })

      if (!validationError){
         return res.status(200).json({ jwt: user.generateJWT(), message: "User successfully registered"})
      }
   } catch (e) {
      console.log(e)
      return res.status(500).send('Internal Server Error')
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

      console.log(user);

      if (user && user.validatePassword(password))
         return res.status(200).json({ access_token: user.generateJWT(), message: "Logged In" })
      return res.status(401).send(null)
   } 
   catch (err) {
      console.log(err)
      return res.sendStatus(500)
   }
}


module.exports.me = async (req, res) => {
   try {
      if (!req.user.isAuthenticated) {
         res.sendStatus(401)
         return
      }
      let user = req.user.data
      res.send({
         email: user.email,
         name: user.name,
         phone: user.phone,
      })
   } catch (e) {
      console.log(e)
      return res.sendStatus(500)
   }
}
