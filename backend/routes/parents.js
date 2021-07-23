const router = require("express").Router();
const parents = require("../controllers/parents");

router.get("/addSchoolPolicy", parents.addParentsData);

module.exports = {
  router: router,
  basePath: "/api",
};
