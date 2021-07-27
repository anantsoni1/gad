const router = require("express").Router();
const routes = [
  "auth",
  "contact",
  "about",
  "home",
  "career",
  "principal",
  "team",
  "contactDetails",
  "contactForm",
  "admission",
  "covid",
  "parents",
  "gallery",
  "blogs",
  "info",
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
