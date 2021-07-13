const router = require("express").Router();
const contactForm = require("../controllers/contactForm");

router.post("/addContactForm", contactForm.addContactForm);
router.put("/modifyContactForm", contactForm.modifyContactForm);
router.get("/getContactForm", contactForm.getContactForm);

module.exports = {
  router: router,
  basePath: "/api",
};
