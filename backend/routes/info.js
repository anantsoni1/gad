const router = require("express").Router();
const info = require("../controllers/info");

router.post("/addInfoData", info.addInfoPageData);
router.put("/modifyInfoData", info.modifyInfoData);
router.get("/getInfoData", info.getInfoData);

module.exports = {
  router: router,
  basePath: "/api",
};
