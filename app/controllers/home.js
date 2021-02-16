const router = require("express").Router();
//const userModel = require("../models/userModel");
const model = require("../models");
const tesMiddleware = require("../middleware/tes");

router.get("/tesdb", async (req, res) => {
  //tes db
  const result = await model.users.findAll();

  res.status(200).json({
    text: "helo world",
    data: result,
  });
});

router.get("/", tesMiddleware, (req, res) => {
  //tes view engine
  const msg = req.name;
  res.status(200).render("index", {
    name: msg,
  });
});

module.exports = router;

