const { Router } = require('express')
const controller = require('../controllers/user')
const { auth } = require('../middlewares/auth')

const router = Router()

router.post('/login', controller.login)
router.post('/register', controller.register)
router.get('/me', auth, controller.me)

module.exports = router
