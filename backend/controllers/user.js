const jwt = require('jsonwebtoken')
const User = require('../models/user')

module.exports.register = async ({ body: { email, password } }, res) => {
   try {
      if (!email || !password) return res.sendStatus(400)
      let oldUser = await User.findOne({ email }).catch((err) => {
         console.error(err)
      })
      if (oldUser) return res.status(400).send('Already Exists')
      let user = new User({ email })
      user.setPassword(password)
      let validationError = false
      await user.save().catch((err) => {
         validationError = true
         return res.sendStatus(400)
      })
      if (!validationError) return res.send(user.generateJWT())
   } catch (e) {
      console.log(e)
      return res.sendStatus(500)
   }
}
module.exports.login = async ({ body: { email, password } }, res) => {
   try {
      if (!email || !password) return res.sendStatus(400)
      let user = await User.findOne({ email }).catch((err) =>
         console.error(err)
      )

      if (user && user.validatePassword(password))
         return res.json({ access_token: user.generateJWT() })
      return res.status(401).send(null)
   } catch (err) {
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
