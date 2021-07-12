const router = require("express").Router();
const contactDetails = require("../controllers/contactDetails");

router.post("/addContactDetails", contactDetails.addContactDetails);
router.put("/modifyContactDetails", contactDetails.modifyContactDetails);
router.get("/getContactDetails", contactDetails.getContactDetails);

module.exports = {
  router: router,
  basePath: "/api",
};
