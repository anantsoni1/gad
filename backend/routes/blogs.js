const router = require("express").Router();
const blogs = require("../controllers/blogs");

router.post("/blogs/add", blogs.addBlogsData);
// router.put("/modifyCovid", covid.modifyCovid);
router.get("/blogs/get", blogs.getBlogsData);

module.exports = {
  router: router,
  basePath: "/api",
};
