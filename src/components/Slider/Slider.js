import React from "react";
import Slide from "react-slick";
import slide1 from "../../assets/Image/slide/slide1.png";
import slide2 from "../../assets/Image/slide/slide2.png";
import slide3 from "../../assets/Image/slide/slide3.png";
import slide4 from "../../assets/Image/slide/slide4.png";
import slide5 from "../../assets/Image/slide/slide5.png";
import Container from "@mui/material/Container";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: "1", right: "10px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", zIndex: "1", left: "10px" }}
      onClick={onClick}
    />
  );
}

const Slider = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="slider">
        <Container>
          <div className="row">
            <div className="slide-left">
              <Slide {...settings} style={{ height: "270px" }}>
                <div className="slides-img">
                  <img src={slide1} alt="" />
                </div>
                <div className="slides-img">
                  <img src={slide2} alt="" />
                </div>
                <div className="slides-img">
                  <img src={slide3} alt="" />
                </div>
                <div className="slides-img">
                  <img src={slide4} alt="" />
                </div>
                <div className="slides-img">
                  <img src={slide5} alt="" />
                </div>
              </Slide>
            </div>
            <div className="slide-right">
              <div
                className="slide-banner"
                style={{ width: "100%", height: "270px" }}
              >
                <div className="slide-banner-top">
                  <img
                    src={slide1}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="slide-banner-bottom">
                  <img
                    src={slide2}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div></div>
    </>
  );
};

export default Slider;
