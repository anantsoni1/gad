import React, { useState, useContext, useEffect, useRef } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import SunEditor from "suneditor-react";
import { addNewBlog , getBlogsById} from "../../../redux/actions/blogs";
import { useDispatch, useSelector } from "react-redux";
import "suneditor/dist/css/suneditor.min.css";
import { useHistory , useLocation} from "react-router-dom";

function Blogs() {
  const history = useHistory();
  const dispatch = useDispatch();
  const initialState = {
    title: "",
    author: "",
    shortDescription: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [desc, setDesc] = useState("");
  const editorRef = useRef();
  const location = useLocation().search;
  const id = new URLSearchParams(location).get("id");
  const blogs = useSelector(state => {return state?.blogs?.getBlogsData?.data});
  console.log(id);
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  }));

  // useEffect(() => {
  //    console.log(editorRef.current?.editor.core);
  // }, []);
  const updateBlog = (e) => {
    e.preventDefault();
    dispatch(
      addNewBlog({ ...formData, desc: desc, date: new Date() }, history)
    );
  };

  const setOptions = {
    buttonList: [
      ["font", "fontSize", "formatBlock"],
      ["bold", "underline", "italic", "removeFormat"],
      [
        "fontColor",
        "hiliteColor",
        "outdent",
        "indent",
        "align",
        "horizontalRule",
        "list",
      ],
      ["link", "image", "video", "fullScreen", "preview"],
    ],
    dialogBox: {
      linkBox: {
        title: "Insert Link",

        url: "URL to link",

        text: "Text to display",

        newWindowCheck: "Open in new window",
      },

      imageBox: {
        title: "Insert image",

        file: "Select from files",

        url: "Image URL",

        altText: "Alternative text",
      },

      videoBox: {
        title: "Insert Video",

        url: "Media embed URL, YouTube",
      },
    },
  };
  return (
    <div>
      <Sidebar />
      <div class="d-flex justify-content-between align-items-center blogs-heading">
        <h3>Add New Blog</h3>
      </div>
      <div className="w-100 h-100 blogs-form">
        <form>
          <div className="form-group">
            <label className="font-20 font-bold mt-3">Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  title: e.target.value,
                });
                console.log(formData);
              }}
              type="text"
              className="form-control mt-3"
              id="exampleFormControlInput1"
              placeholder="Blog Title"
              required
            />
          </div>
          <div className="form-group">
            <label className="font-20 font-bold mt-3">Author</label>
            <input
              name="author"
              value={formData.author}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  author: e.target.value,
                });
                console.log(formData);
              }}
              type="text"
              className="form-control mt-3"
              id="exampleFormControlInput1"
              placeholder="Blog Title"
              required
            />
          </div>
          <div className="form-group">
            <label className="font-20 font-bold mt-3">Short Description</label>
            <textarea
              name="shortDescription"
              value={formData.shortDescription}
              onChange={(e) => {
                console.log(e);
                setFormData({
                  ...formData,
                  shortDescription: e.target.value,
                });
              }}
              className="form-control mt-3"
              id="exampleFormControlInput1"
              placeholder="Short Description for cards"
              required
            />
          </div>
          <div className="form-group">
            <label className="font-20 font-bold mt-3 mb-1">Description</label>
            <SunEditor
              ref={editorRef}
              height="100"
              placeholder="Please add yor blog here..."
              onChange={(content) => {
                setDesc(content);
              }}
              setContents={desc}
              setOptions={setOptions}
            />
          </div>
          <button
            type="submit"
            class="btn btn-primary mt-5"
            onClick={updateBlog}
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default Blogs;
