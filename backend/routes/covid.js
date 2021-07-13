const router = require("express").Router();
const covid = require("../controllers/covid");

router.post("/addCovid", covid.addCovid);
router.put("/modifyCovid", covid.modifyCovid);
router.get("/getCovid", covid.getCovid);

module.exports = {
  router: router,
  basePath: "/api",
};
