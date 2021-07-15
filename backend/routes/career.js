const router = require("express").Router();
const career = require("../controllers/career");

router.post("/addCareerPageData", career.addCareerPageData);
router.put("/modifyCareerPageData", career.modifyCareerPageData);
router.get("/getCareerPageData", career.getCareerPageData);

module.exports = {
  router: router,
  basePath: "/api",
};
