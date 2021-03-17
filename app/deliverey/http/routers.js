const express = require("express");
const middlewareExample = require("./middlewares/exampleMiddleware");
const router = express.Router();

const homeController = require("./controllers/homeController");
const userController = require("./controllers/userController")

router.get("/axios/tes", homeController.tesFetchData)
router.get("/user/fetch", middlewareExample, homeController.fetchUser);
router.get("/redis/tes/:key",homeController.testRedis)
router.get("/:number", homeController.index);
router.get("/user/get",userController.fetchUser)
router.post("/user/insert",userController.insertUser);
router.put("/user/update",userController.updateUser)
router.get("/user/get/:username",userController.getByUsername)
router.delete("/user/delete/:username",userController.deleteByUsername)
router.get("/user/coba",(req, res)=>{
    res.send("hai coba")
})
module.exports = router;
