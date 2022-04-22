const { Router } = require('express')
const controller = require('../controllers/user')
const { auth, apiAuth } = require('../middlewares/auth')

const router = Router()

router.post('/login', controller.login)
router.post('/register', controller.register)
router.get('/me', auth, controller.me)
router.post('/generate-api-key', auth, controller.generateAPIKey)
router.get('/api/me', apiAuth, controller.me)

module.exports = router
