const router = require("express").Router();
const blogs = require("../controllers/blogs");

router.post("/blogs/add", blogs.addBlogsData);
router.put("/blogs/edit", blogs.editBlogsData);
router.get("/blogs/get", blogs.getBlogsData);
router.get("/blogs/get-by-id", blogs.getBlogByIdData);

module.exports = {
  router: router,
  basePath: "/api",
};
