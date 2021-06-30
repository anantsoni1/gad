const router = require("express").Router();
const home = require("../controllers/home");

router.post("/addHomeData", home.addHomeData);
router.put("/modifyHomeData", home.modifyHomeData);
router.get("/getHomeData", home.getHomeData);

module.exports = {
  router: router,
  basePath: "/api",
};
