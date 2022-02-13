const express = require('express')
const cors = require('cors')
const http = require('http')
const { urlencoded, json } = require('body-parser')
const session = require('express-session')
const mongoStore = require('connect-mongo')
const db = require('./config/mongodb')

require('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors())
app.use(json())
app.use(
   urlencoded({
      extended: false,
   })
)

app.use(
   session({
      name: 'url-minify',
      // TODO change the secret before deployment secret need to be proper key for now we put some random text
      saveUninitialized: false,
      resave: false,
      secret: process.env.SECRET,
      cookie: {
         maxAge: 1000 * 60 * 30,
      },
      store: mongoStore.create({
         clientPromise: db,
      }),
   })
)

app.use('/', require('./routers'))

const server = http.createServer(app)
server.listen(process.env.PORT || 5000, '0.0.0.0', () => {
   console.log(`🤖 API listening on port ${process.env.PORT || 5000}!`)
})
