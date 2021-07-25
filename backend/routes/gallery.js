const router = require("express").Router();
const gallery = require("../controllers/gallery");

router.post("/addGallerydata", gallery.addGallerydata);
router.put("/modifyGalleryData", gallery.modifyGalleryData);
router.get("/getGalleryData", gallery.getGalleryData);

module.exports = {
  router: router,
  basePath: "/api",
};
