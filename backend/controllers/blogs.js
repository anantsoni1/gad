const Blogs = require("../models/Blogs");

exports.addBlogsData = async (req, res) => {
  let blogs = Blogs(req.body);
  blogs.save().then((data, error) => {
    if (error) {
      return res.status(400).send({
        msg: "Failed to add",
      });
    }
    return res.status(200).send({
      msg: "Data Added succesfully",
      data: data,
    });
  });
};
// get all
exports.getBlogsData = async (req, res) => {
  try {
    Blogs.find({}, (err, data) => {
      if (err) {
        return res.status(400).json({ msg: err });
      }

      if (data) {
        return res.status(200).json({ data: data });
      }
    });
  } catch (e) {
    return res.status(400).json({ msg: e });
  }
};

exports.getBlogByIdData = async (req, res) => {
  try {
    Blogs.findById(req.query.id, (err, data) => {
      if (err) {
        return res.status(400).json({ msg: err });
      }

      if (data) {
        return res.status(200).json({ data: data });
      }
    });
  } catch (e) {
    return res.status(400).json({ msg: e });
  }
};

exports.editBlogsData = async (req, res) => {
  Blogs.findByIdAndUpdate(req.query.id, req.body, (err, data) => {
    if (err) {
      return res.status(400).json({ msg: err.message });
    }
    return res
      .status(201)
      .json({ msg: "Updated Data successfully", data: data });
  });
};
