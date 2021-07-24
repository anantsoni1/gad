const router = require("express").Router();
const parents = require("../controllers/parents");

router.post("/addSchoolPolicy", parents.addSchoolPolicyData);
router.post("/addSchoolNewsletter", parents.addSchoolNewsletterData);
router.post("/addCalendar", parents.addCalendarData);
router.delete("/deleteSchoolPolicy", parents.deleteSchoolPolicyData);
router.delete("/deleteSchoolNewsletter", parents.deleteSchoolNewsletterData);
router.delete("/deleteCalendar", parents.deleteCalendarData);
router.get("/getSchoolPolicy", parents.getSchoolPolicy);
router.get("/getSchoolNewsletter", parents.getSchoolNewsletter);
router.get("/getCalendar", parents.getCalendar);
router.put("/updateSchoolPolicy", parents.updateSchoolPolicy);
router.put("/updateSchoolNewsletter", parents.updateSchoolNewsletter);
router.put("/updateCalendar", parents.updateCalendar);
module.exports = {
  router: router,
  basePath: "/api",
};
