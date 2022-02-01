const {Router} = require("express")
const controller = require("../controllers/add_url")

const router = Router();

router.post("/minify/add", controller.addURL)

module.exports = router;