const express = require("express");
const middlewareExample = require("./middlewares/exampleMiddleware");
const router = express.Router();

const homeController = require("./controllers/homeController");

router.get("/user", middlewareExample, homeController.fetchUser);
router.get("/:number", homeController.index);

module.exports = router;
