const {Router} = require("express")
const controller = require("../controllers/minify")

const router = Router();

router.get("/alias/:alias", controller.getURLData)

module.exports = router;