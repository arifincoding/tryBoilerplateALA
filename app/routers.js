const express = require("express");
const middlewareExample = require("./middleware/tes");
const router = express.Router();

const homeController = require("./controllers/home");

router.get("/user", middlewareExample, homeController.fetchUser);
router.get("/:number", homeController.index);

// app.use('{url}',{controller Name/file})
module.exports = router;
