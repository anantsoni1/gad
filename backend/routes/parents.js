const router = require("express").Router();
const parents = require("../controllers/parents");

router.post("/addSchoolPolicy", parents.addSchoolPolicyData);
router.post("/addSchoolNewsletter", parents.addSchoolNewsletterData);
router.post("/addCalendar", parents.addCalendarData);
router.delete("/deleteSchoolPolicy", parents.deleteSchoolPolicyData);
router.put("/updateSchoolPolicy", parents.updateSchoolPolicyData);
router.put("/updateSchoolNewsletter", parents.updateSchoolNewsletter);
router.put("/updateCalendar", parents.updateCalendar);
router.delete("/deleteSchoolNewsletter", parents.deleteSchoolNewsletterData);
router.delete("/deleteCalendar", parents.deleteCalendarData);
// router.post("/addParentsData", parents.addParentsData);

module.exports = {
  router: router,
  basePath: "/api",
};
