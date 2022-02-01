const express = require('express')
const router = express.Router()

const homeController = require('../controllers/home_controller')

router.get('/', homeController.home)
router.use("/minify",require("./minify"))
router.post("/minify/add",require("./add_url"))

module.exports = router
