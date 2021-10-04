import Header from "../header/index";
import Group8918 from "../../assets/Group8918.svg";
import ReactPlayer from "react-player";

const Team = () => {
  return (
    <>
      <div className="team mb-5">
        <div className="pb-lg-5 pb-1">
          <Header img={Group8918} heading="VIDEOS" />
        </div>
        <ReactPlayer
          url="https://www.youtube.com/embed/qw3bDRiF6Ew"
          style={{ margin: "10px auto" }}
          controls
        />
        <ReactPlayer
          url="https://www.youtube.com/embed/HxiOoSRBVNY"
          style={{ margin: "10px auto" }}
          controls
        />
        <ReactPlayer
          url="https://www.facebook.com/guruangaddevelementaryschool/videos/1041783069683018/"
          style={{ margin: "10px auto",}}
          controls
        />
        <ReactPlayer
          url="https://www.facebook.com/guruangaddevelementaryschool/videos/165834222037730/"
          style={{ margin: "10px auto" }}
          controls
        />
      </div>
    </>
  );
};

export default Team;
