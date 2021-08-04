import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { GetHomeData } from "../../redux/actions/home";
import { GetInfoData } from "../../redux/actions/info";
import { GetGalleryData } from "../../redux/actions/gallery";
import { Carousel } from "react-bootstrap";
import person from "../../assets/person.svg";
import { imageUrl } from "../../redux/api/index";
import { Alert } from "@material-ui/lab";
import { AlertTitle } from "@material-ui/lab";
import ImageGallery from "react-image-gallery";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { Link, useHistory } from "react-router-dom";
import { getBlogs } from "../../redux/actions/blogs";
import alertImage from "../../assets/alert.jpg";

function Home() {
  const infoData = useSelector((state) => state?.info?.getInfoData);
  const dispatch = useDispatch();
  const history = useHistory();
  const blogs = useSelector(state => {return state?.blogs?.getBlogsData?.data});
  const [displayGallery, setDisplayGallery] = useState(false);
  const [open, setOpen] = useState(false);
  const [openAlertDiv, setOpenAlertDiv] = useState(false);
  const onCloseModal = () => setOpen(false);
  useEffect(() => {
    dispatch(getBlogs());
    dispatch(GetHomeData())
      .then((res) => {})
      .catch(() => {});
    dispatch(GetInfoData())
      .then((res) => {
        setOpen(res?.data[0]?.display);
        setOpenAlertDiv(res?.data[0]?.display);
      })
      .catch(() => {});
    dispatch(GetGalleryData())
      .then((res) => {})
      .catch(() => {});
  }, []);
  const homeData = useSelector((state) => state.home?.getHomeData);
  const galleryData = useSelector((state) => state?.gallery?.getGalleryData);

  let images = [];
  galleryData?.data?.map((data) =>
    images.push({
      original: `${imageUrl}${data.img}`,
      thumbnail: `${imageUrl}${data.img}`,
    })
  );
  return (
    <>
      {homeData && homeData.slots.length > 0 && (
        <div className="home">
          <Modal
            classNames={{
              modal: "alertModal",
            }}
            open={open}
            onClose={onCloseModal}
            center
          >
            <div className="d-flex flex-column align-items-center">
              <h2 className="font-bold">{infoData?.data[0]?.heading}</h2>
              <img src={alertImage} alt={alertImage} className="alertImage" />
              <p className="h5 py-2">{infoData?.data[0]?.text}</p>
            </div>
          </Modal>
          <div className="home-banner">
            <div className="home-heading text-white text-center">
              <div className="main-heading" style={{ paddingTop: "45vh" }}>
                {homeData.slots[0].heading}
              </div>
              <div className="home-sub-heading text-white">
                {homeData.slots[0].subHeading}
              </div>
            </div>
          </div>
          {openAlertDiv ? (
            <div>
              <Alert severity="warning">
                <AlertTitle>
                  <h4 className="font-bold">{infoData?.data[0]?.heading}</h4>
                </AlertTitle>
                <p className="h5 py-2">{infoData?.data[0]?.text}</p>
              </Alert>
            </div>
          ) : (
            ""
          )}
          <div className="container">
            {displayGallery && (
              <div className="modal-container py-5">
                <div className="container py-5">
                  <div className="row py-5">
                    <div
                      id="modal"
                      style={{ maxHeight: "40%" }}
                      className="col-12 mx-auto col-md-12 col-lg-12 py-5 px-xl-3"
                    >
                      <div
                        className="d-flex justify-content-end"
                        onClick={() => setDisplayGallery(false)}
                      >
                        <i
                          class="fa fa-window-close fa-2x text-white text-right"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <ImageGallery
                        items={images}
                        fullscreen
                        lazyLoad
                        slideInterval="1000"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="row carousel-flex">
              <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                <div className="new-updates">
                  <div className="update-home-heading">
                    {homeData.slots[0].blogsHeading}
                  </div>
                  <div className="update-sub-heading">
                    {homeData.slots[0].blogsSubHeading}
                  </div>
                  <div className="row mt-md-5 mt-3">
                    {/* <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-4">
                      <div className="update-card update-red">
                        <div className="d-flex justify-content-between py-5 px-4">
                          <div>
                            <div className="dates date-red">27</div>
                            <div className="month text-center mt-2">Apr</div>
                          </div>
                          <div style={{ paddingLeft: "1.5rem" }}>
                            <div className="update-head">Jane Cooper</div>
                            <p className="text-muted">
                              Please join our school and help Heart...
                            </p>
                            <div className="color-red mt-3">
                              read more&nbsp;&nbsp;&nbsp;{" "}
                              <i className="fas fa-arrow-right"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                    {blogs && blogs.length>0 ? (
                      blogs.map((b,i)=>{
                        if (i == 0) {
                          return (
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-4">
                            <div className="update-card update-red">
                              <div className="d-flex justify-content-between py-5 px-4">
                                <div>
                                  <div className="dates date-red">{(new Date(b.date)).getDate()}</div>
                                  <div className="month text-center mt-2">{(new Date(b.date)).toLocaleString('default', { month: 'short' })}</div>
                                </div>
                                <div style={{ paddingLeft: "1.5rem" }}>
                                  <div className="update-head">{b.title}</div>
                                  <p className="text-muted">
                                    {b.shortDescription.substr(0,36)}...
                                  </p>
                                  <div className="color-red mt-3"
                                    style={{"cursor": "pointer"}}>
                                    read more&nbsp;&nbsp;&nbsp;{" "}
                                    <i className="fas fa-arrow-right"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          )
                        }
                        if (i == 1) {
                          return (
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-4">
                            <div className="update-card update-purple">
                              <div className="d-flex justify-content-between py-5 px-4">
                                <div>
                                <div className="dates date-purple">{(new Date(b.date)).getDate()}</div>
                                  <div className="month text-center mt-2">{(new Date(b.date)).toLocaleString('default', { month: 'short' })}</div>
                                </div>
                                <div style={{ paddingLeft: "1.5rem" }}>
                                <div className="update-head">{b.title}</div>
                                  <p className="text-muted">
                                    {b.shortDescription.substr(0,36)}...
                                  </p>
                                  <div className="color-purple mt-3"
                                                                    style={{"cursor": "pointer"}}>
                                    read more&nbsp;&nbsp;&nbsp;{" "}
                                    <i className="fas fa-arrow-right"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          )
                        }
                        if (i == 2) {
                          return (
                            <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-4">
                            <div className="update-card update-green">
                              <div className="d-flex justify-content-between py-5 px-4">
                                <div>
                                <div className="dates date-green">{(new Date(b.date)).getDate()}</div>
                                  <div className="month text-center mt-2">{(new Date(b.date)).toLocaleString('default', { month: 'short' })}</div>
                                </div>
                                <div style={{ paddingLeft: "1.5rem" }}>
                                <div className="update-head">{b.title}</div>
                                  <p className="text-muted">
                                    {b.shortDescription.substr(0,36)}...
                                  </p>
                                  <div className="color-green mt-3"
                                  style={{"cursor": "pointer"}}>
                                    read more&nbsp;&nbsp;&nbsp;{" "}
                                    <i className="fas fa-arrow-right"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          )
                        }
                      })
                    ) : ''}
                    {/* <div className="col-lg-4 col-md-12 col-sm-12 col-12 mt-4">
                      <div className="update-card update-green">
                        <div className="d-flex justify-content-between py-5 px-4">
                          <div>
                            <div className="dates date-green">09</div>
                            <div className="month text-center mt-2">Apr</div>
                          </div>
                          <div style={{ paddingLeft: "1.5rem" }}>
                            <div className="update-head">Jane Cooper</div>
                            <p className="text-muted">
                              Please join our school and help Heart...
                            </p>
                            <div className="color-green mt-3">
                              read more&nbsp;&nbsp;&nbsp;{" "}
                              <i className="fas fa-arrow-right"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="comprehensive-head mt-md-5 mt-3 pt-4">
                    {homeData.slots[0].curriculaHeading}
                  </div>
                  <div className="comprehensive-sub-head">
                    {homeData.slots[0].curriculaSubHeading}
                  </div>
                  <div className="center">
                    <Link to="/parents">
                    <button className="text-center text-white btn mt-5 comprehensive-btn">
                      Explore Curricula
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-discover">
            <div className="container">
              <div className="row carousel-flex">
                <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-center">
                      <div onClick={() => setDisplayGallery(!displayGallery)}>
                        <img
                          src={`${imageUrl}${homeData.slots[0].discoverImg}`}
                          alt=""
                          className="img-fluid px-4 gallery-hover"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12 center">
                      <div className="wrapper text-white">
                        <h1 className="text-white mt-4">
                          {homeData.slots[0].discoverHeading}
                        </h1>
                        <h4>{homeData.slots[0].discoverSubHeading}</h4>
                        <p className="text-white mt-lg-5">
                          {homeData.slots[0].discoverText}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="kindergarten">
            <div className="container">
              <div className="row carousel-flex">
                <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                  <div className="row">
                    <div className="col-lg-5 col-md-12 col-sm-12 col-12 center">
                      <img
                        src={`${imageUrl}${homeData.slots[0].kindergartenImg}`}
                        alt=""
                        className="img-fluid px-4"
                      />
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 col-12 center">
                      <div className="wrapper ">
                        <div className="kindergarten-head">
                          {homeData.slots[0].kindergarten}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="discover-bg-home text-white">
            <div className="container">
              <div className="row carousel-flex">
                <div className="col-lg-10 col-md-12 col-sm-12 col-12 wrapper">
                  <h1>{homeData.slots[0].discoverMoreHeading}</h1>
                  <p>{homeData.slots[0].discoverMoreSubHeading}</p>
                  <p className="mt-5">{homeData.slots[0].discoverMoreText}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="features">
            <div className="container">
              <div className="row carousel-flex">
                <div className="col-lg-10 col-md-12 col-sm-12 col-12">
                  <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="feature-image text-center mt-3">
                        <img
                          src={`${imageUrl}${homeData.slots[0].featureOne}`}
                          alt="features"
                          className="img-fluid feature-image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="feature-image text-center mt-3">
                        <img
                          src={`${imageUrl}${homeData.slots[0].featureTwo}`}
                          alt="features"
                          className="img-fluid feature-image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                      <div className="feature-image text-center mt-3">
                        <img
                          src={`${imageUrl}${homeData.slots[0].featureThree}`}
                          alt="features"
                          className="img-fluid feature-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="home-carousel">
            <Carousel>
              <Carousel.Item>
                <div className="carousel-flex container py-5 my-5">
                  <img src={person} className="img-fluid" alt="First slide" />
                  <div className="flex-content">
                    <p>
                      We pride ourselves using the holistic approach to develop
                      students academically, socially and emotionally. Students
                      experience inquiry-based learning with real-life, hands-on
                      workshops and lessons to enrich their understanding both
                      in and outside of the classroom. Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.
                    </p>
                    <h5 className="mt-3">John Doe</h5>
                    <p className="mt-0 pt-0">Instructor</p>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carousel-flex container py-5 my-5">
                  <img src={person} className="img-fluid" alt="Third slide" />
                  <div className="flex-content">
                    <p>
                      We pride ourselves using the holistic approach to develop
                      students academically, socially and emotionally. Students
                      experience inquiry-based learning with real-life, hands-on
                      workshops and lessons to enrich their understanding both
                      in and outside of the classroom. Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry. Lorem
                      Ipsum has been the industry's standard dummy text ever
                      since the 1500s, when an unknown printer took a galley of
                      type and scrambled it to make a type specimen book. It has
                      survived not only five centuries, but also the leap into
                      electronic typesetting, remaining essentially unchanged.
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum.
                    </p>
                    <h5 className="mt-3">John Doe</h5>
                    <p className="mt-0 pt-0">Instructor</p>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
