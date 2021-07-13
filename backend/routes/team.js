const router = require("express").Router();
const team = require("../controllers/team");

router.post("/addTeamPageData", team.addTeamPageData);
router.put("/modifyTeamPageData", team.modifyTeamPageData);
router.get("/getCareerPageData", team.getCareerPageData);

module.exports = {
  router: router,
  basePath: "/api",
};
