const exampleController = require("../controllers/exampleController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.get("/", authMiddleware, exampleController.hello);

module.exports = router;
