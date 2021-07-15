const { createToken } = require('../utils/auth');
const User = require("../models/User");

exports.loginUser = (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ msg: 'You need to send email/number and password' });
  }

  if (req.body.email.includes('@')) {
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
        return res.status(400).send({ msg: err });
      }
  
      if (!user) {
        return res.status(400).json({ msg: 'The user does not exist' });
      }
  
      user.comparePassword(req.body.password, (err, isMatch) => {
        console.log(user);
        if (isMatch && !err) {
          return res.status(200).json({
            token: createToken(user),
          });
        } else {
          return res
            .status(400)
            .json({ msg: "The email and password don't match." });
        }
      });
    });
  } else {
    User.findOne({ phone: req.body.email }, (err, user) => {
      if (err) {
        return res.status(400).send({ msg: err });
      }
  
      if (!user) {
        return res.status(400).json({ msg: 'The user does not exist' });
      }
  
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          return res.status(200).json({
            token: createToken(user),
          });
        } else {
          return res
            .status(400)
            .json({ msg: "The phone and password don't match." });
        }
      });
    });
  }
};


