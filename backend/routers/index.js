const express = require('express')
const router = express.Router()

const homeController = require('../controllers/home_controller')
const app = require("express-session");
const viewerController = require("../controllers/viewer_count");

router.get('/', homeController.home)
router.get('/session', viewerController.viewer)
router.use('/minify', require('./minify'))
router.use('/user', require('./user'))

module.exports = router
