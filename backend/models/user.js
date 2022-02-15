const mongoose = require('mongoose')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const { Schema } = mongoose

const UsersSchema = new Schema(
   {
      email: {
         type: String,
         unique: true,
      },
      name: {
         type: String,
         // required: true,
      },
      hash: String,
      salt: String,
   },
   {
      timestamps: true,
   }
)

UsersSchema.methods.setPassword = function (password) {
   this.salt = crypto.randomBytes(16).toString('hex')
   this.hash = crypto
      .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
      .toString('hex')
}

UsersSchema.methods.validatePassword = function (password) {
   const hash = crypto
      .pbkdf2Sync(password, this.salt, 10000, 512, 'sha512')
      .toString('hex')
   return this.hash === hash
}

UsersSchema.methods.generateJWT = function () {
   const today = new Date()
   const expirationDate = new Date(today)
   expirationDate.setDate(today.getDate() + 60)

   return jwt.sign(
      {
         email: this.email,
         hash: this.hash,
         id: this._id,
         exp: parseInt(String(expirationDate.getTime() / 1000), 10),
      },
      process.env.AUTH_SECRET
   )
}

UsersSchema.methods.toAuthJSON = function () {
   return {
      id: this._id,
      email: this.email,
      token: this.generateJWT(),
   }
}

module.exports = mongoose.model('users', UsersSchema)
