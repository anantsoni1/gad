const router = require("express").Router();
const about = require("../controllers/about");

router.post("/addAboutPageData", about.addAboutPageData);
router.put("/modifyAboutPageData", about.modifyAboutPageData);
router.get("/getAboutPageData", about.getAboutPageData);

module.exports = {
  router: router,
  basePath: "/api",
};
