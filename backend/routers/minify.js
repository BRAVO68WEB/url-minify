const {Router} = require("express")
const controller = require("../controllers/minify")

const router = Router();

router.get("/all", controller.getAllData)

router.get("/alias/:alias", controller.getURLData)

router.post("/add",controller.addURL)

router.delete('/delete/:id',controller.deleteUrlData)

router.patch('/edit/:id', controller.updateUrlData)

module.exports = router;