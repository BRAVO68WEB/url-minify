const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller");
const test = async (req, res) => {
  console.log("🚀 ~test ~ running.........");
  return res.send("Running");
};

router.get("/test", test);
router.get("/", homeController.home);

module.exports = router;
