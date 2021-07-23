const Parents = require("../models/Parents");
var multer = require('multer');
const path = require("path")

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
  
        // Uploads is the Upload_folder_name
        cb(null, "assets/files")
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
  })
       
// Define the maximum size for uploading
// picture i.e. 1 MB. it is optional
const maxSize = 100 * 1000 * 1000;
    
var upload = multer({ 
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: function (req, file, cb){
    
        // Set the filetypes, it is optional
        var filetypes = /jpeg|jpg|png|pdf/;
        var mimetype = filetypes.test(file.mimetype);
  
        var extname = filetypes.test(path.extname(
                    file.originalname).toLowerCase());
        
        if (mimetype && extname) {
            return cb(null, true);
        }
      
        cb("Error: File upload only supports the "
                + "following filetypes - " + filetypes);
      } 
  
// mypic is the name of file attribute
}).single("uploadedFile"); 

exports.addParentsData = async (req, res) => {
    if (!req.body.title ) {
        return res.status(400).json({ msg: "Invalid data" });
    }
    // Error MiddleWare for multer file upload, so if any
    // error occurs, the image would not be uploaded!
    upload(req,res,function(err) {

        if(err) {

            // ERROR occured (here it can be occured due
            // to uploading image of size greater than
            // 100MB or uploading different file type)
            return res.status(400).json({ msg: err.message });
        }
        else {

            // SUCCESS, image successfully uploaded
            const newFile = {
                title : "req.body.title" ,
                url : "/files/"+ req.file.filename
            }
            
            res.send("Success, Image uploaded!")
        }
    })
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
