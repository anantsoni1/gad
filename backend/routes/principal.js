const router = require("express").Router();
const principal = require("../controllers/principal");

router.post("/addPrincipalData", principal.addPrincipalPageData);
router.put("/modifyPrincipalData", principal.modifyPrincipalData);
router.get("/getPrincipalData", principal.getPrincipalData);

module.exports = {
  router: router,
  basePath: "/api",
};
