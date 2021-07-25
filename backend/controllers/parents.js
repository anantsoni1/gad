const Parents = require("../models/Parents");
var multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Uploads is the Upload_folder_name
    cb(null, "assets/files");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// Define the maximum size for uploading
// picture i.e. 1 MB. it is optional
const maxSize = 100 * 1000 * 1000;

var upload = multer({
  storage: storage,
  limits: { fileSize: maxSize },
  fileFilter: function (req, file, cb) {
    // Set the filetypes, it is optional
    var filetypes = /jpeg|jpg|png|pdf/;
    var mimetype = filetypes.test(file.mimetype);

    var extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }

    cb(
      "Error: File upload only supports the " +
        "following filetypes - " +
        filetypes
    );
  },
}).single("uploadedFile");

exports.addSchoolPolicyData = async (req, res) => {
  upload(req, res, async function (err) {
    if (!req.body.title) {
      return res.status(400).json({ msg: "Invalid data" });
    }
    if (err) {
      return res.status(400).json({ msg: err.message });
    } else {
      const newFile = {
        title: req.body.title,
        url: "/files/" + req.file.filename,
      };
      const uploadedFile = await Parents.find({});
      uploadedFile[0].schoolPolicies.push(newFile);
      uploadedFile[0].save().then((s) => {
        return res.status(201).json({ schoolPolicy: s });
      });
    }
  });
};

exports.addSchoolNewsletterData = async (req, res) => {
  upload(req, res, async function (err) {
    if (!req.body.title) {
      return res.status(400).json({ msg: "Invalid data" });
    }
    if (err) {
      return res.status(400).json({ msg: err.message });
    } else {
      const newFile = {
        title: req.body.title,
        url: "/files/" + req.file.filename,
      };
      const uploadedFile = await Parents.find({});
      uploadedFile[0].schoolNewsletters.push(newFile);
      uploadedFile[0].save().then((s) => {
        return res.status(201).json({ schoolNewsletter: s });
      });
    }
  });
};

exports.updateSchoolPolicyData = async(req,res) => {
    console.log(req.body);
    if (req.body.url) {
      Parents.updateOne(
        { 'schoolPolicies._id': req.query.id },
        { $set:  
            { 
                'schoolPolicies.$.title': req.body.title   
            }
        },
        (err, result) => {
          if (err) {
            res.status(500)
            .json({ error: 'Unable to update School Policies.', });
          } else {
            res.status(200)
            .json(result);
          }
       }
    );
    } else {
        upload(req,res,async function(err) {
            if (!req.body.title ) {
                return res.status(400).json({ msg: "Invalid data" });
            }
            if(err) {
                return res.status(400).json({ msg: err.message });
            }
            else {
                // Parents.findOne({'schoolPolicies._id': req.query.id })
                // .then(async data=>{
                //     const updated = await data.schoolPolicies.filter(s=>{
                //         if (s._id !== req.query.id) {
                //             return s;
                //         }
                //         else {
                //             console.log(s);
                //             return {
                //                 title : req.body.title,
                //                 url : "/files/"+ req.file.filename
                //             }
                //         }
                //     })
                //     console.log(updated,"hello");
                //     data.schoolPolicies = updated ;
                //     data.save()
                //     .then(d=>{
                //         res.json(d);
                //     })
                // })
                // .catch(e=>{
                //     return res.status(400).json({ msg : "Error Occured" });
                // })
                Parents.updateOne(
                    { 'schoolPolicies._id': req.query.id },
                    { $set:  
                        { 
                            'schoolPolicies.$.url': "/files/"+ req.file.filename,
                            'schoolPolicies.$.title': req.body.title   
                        }
                    },
                    (err, result) => {
                      if (err) {
                        res.status(500)
                        .json({ error: 'Unable to update School Policies.', });
                      } else {
                        res.status(200)
                        .json(result);
                      }
                   }
                );
            }
        })
    }
}

exports.addCalendarData = async (req, res) => {
  upload(req, res, async function (err) {
    if (!req.body.title) {
      return res.status(400).json({ msg: "Invalid data" });
    }
    if (err) {
      return res.status(400).json({ msg: err.message });
    } else {
      const newFile = {
        title: req.body.title,
        url: "/files/" + req.file.filename,
      };
      const uploadedFile = await Parents.find({});
      uploadedFile[0].calendar.calendars.push(newFile);
      uploadedFile[0].save().then((s) => {
        return res.status(201).json({ calendar: s });
      });
    }
  });
};

exports.deleteSchoolPolicyData = async (req, res) => {
  Parents.findOne({ "calendar.calendars._id": req.query.id }).then((data) => {
    console.log(data);
  });
  Parents.findOneAndUpdate(
    { "schoolPolicies._id": req.query.id },
    { $pull: { schoolPolicies: { _id: req.query.id } } },
    (err, data) => {
      if (err) {
        return res.status(500).json({ error: "error in deleting address" });
      }
      res.json(data);
    }
  );
};

// exports.updateSchoolPolicyData = async (req, res) => {
//     Parents.findOne({'calendar.calendars._id':  req.query.id  })
//     .then(data=>{
//         console.log(data);
//     })
//     Parents.findOneAndUpdate({'schoolPolicies._id': req.query.id }, {$pull: {schoolPolicies : { _id : req.query.id }}}, (err, data) => {
//         if (err) {
//             return res.status(500).json({ error: 'error in deleting address' });
//         }
//         res.json(data);   
//     });
// };

exports.deleteSchoolNewsletterData = async (req, res) => {
  // Parents.findOne({'calendar.calendars._id':  req.query.id  })
  // .then(data=>{
  //     console.log(data);
  // })
  Parents.findOneAndUpdate(
    { "schoolNewsletters._id": req.query.id },
    { $pull: { schoolNewsletters: { _id: req.query.id } } },
    (err, data) => {
      if (err) {
        return res.status(500).json({ error: "error in deleting address" });
      }
      res.json(data);
    }
  );
};

exports.deleteCalendarData = async (req, res) => {
  // Parents.find({})
  // .then(data=>{
  //     res.json(data);
  // })
  Parents.findOneAndUpdate(
    { "calendar.calendars._id": req.query.id },
    { $pull: { "calendar.calendars": { _id: req.query.id } } },
    (err, data) => {
      if (err) {
        return res.status(500).json({ error: "error in deleting address" });
      }
      res.json(data);
    }
  );
};

exports.addParentsData = async (req, res) => {
  const newParentData = {
    schoolPolicies: [],
    schoolNewsletters: [],
    calendar: {
      year: "2021-22",
      calendars: [],
    },
  };
  const uploadedParentsData = new Parents(newParentData);
  uploadedParentsData.save().then((p) => {
    return res.status(201).json({ parents: p });
  });
};

// exports.modifyParents = async (req, res) => {
//   if (!req.body.paragraphOne || !req.body.paragraphTwo || !req.body.paragraphThree) {
//     return res.status(400).json({ msg: "Invalid data" });
//   }
//   Covid.findByIdAndUpdate(req.query.id, req.body, (err, data) => {
//     if (err) {
//       return res.status(400).json({ msg: err.message });
//     }
//     return res
//       .status(201)
//       .json({ msg: "Updated Data successfully", data: data });
//   });
// };

// exports.getCovid = (req, res) => {
//   Covid.find({}, (err, data) => {
//     if (err) {
//       return res.status(400).json({ msg: err.message });
//     }
//     return res.status(201).json({ slots: data });
//   });
// };
