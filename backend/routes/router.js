const router = require("express").Router();
const routes = [
  "auth",
  "verify",
  "admin",
  "contact",
  "slot",
  "instructor",
  "payment",
  "ride",
  "address",
  "about",
  "home",
  "career",
  "principal",
  "team",
  "contactDetails",
  "contactForm",
  "admission",
  "covid",
];

module.exports = {
  init: function () {
    routes.forEach((route) => {
      const defination = require(`./${route}`);
      router.use(defination.basePath, defination.router);
    });
    return router;
  },
};
