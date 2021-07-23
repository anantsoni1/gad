const router = require("express").Router();
const parents = require("../controllers/parents");

router.post("/addSchoolPolicy", parents.addSchoolPolicyData);
router.post("/addSchoolNewsletter", parents.addSchoolNewsletterData);
router.post("/addCalendar", parents.addCalendarData);
// router.post("/addParentsData", parents.addParentsData);

module.exports = {
  router: router,
  basePath: "/api",
};
