const router = require("express").Router();
const career = require("../controllers/career");

router.post("/addCareerPageData", career.addCareerPageData);
router.put("/getCareerPageData", career.getCareerPageData);
// router.get("/getHomeData", career.getHomeData);

module.exports = {
  router: router,
  basePath: "/api",
};
