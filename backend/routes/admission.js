const router = require("express").Router();
const admission = require("../controllers/admission");

router.post("/addAdmissionPageData", admission.addAdmissionPageData);
router.put("/modifyAdmissionPageData", admission.modifyAdmissionPageData);
router.get("/getAdmissionPageData", admission.getAdmissionPageData);

module.exports = {
  router: router,
  basePath: "/api",
};
