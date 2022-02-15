const { Router } = require('express')
const controller = require('../controllers/minify')
const { auth } = require('../middlewares/auth')

const router = Router()

router.get('/all', controller.getAllData)
router.get('/id/:id', controller.findUrlById)
router.get('/alias/:alias', controller.getURLData)

router.post('/add', controller.addURL)
router.post('/add/custom', auth, controller.addURLAuthed)

router.patch('/edit/:id', auth, controller.updateUrlData)

router.delete('/delete/:id', auth, controller.deleteUrlData)

module.exports = router
