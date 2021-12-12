import Container from "@mui/material/Container";
import React from "react";
import Slide from "react-slick";
import { AppContext } from "./../../Context/AppProvider";

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
  const { slide } = React.useContext(AppContext);

  const settings = {
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
                {slide?.length > 2
                  ? slide.slice(2).map((item, i) => {
                      return (
                        <div className="slides-img" key={item.id}>
                          <img src={item.image} alt="" />
                        </div>
                      );
                    })
                  : slide.map((item, i) => {
                      return (
                        <div className="slides-img" key={item.id}>
                          <img src={item.image} alt="" />
                        </div>
                      );
                    })}
              </Slide>
            </div>
            <div className="slide-right">
              <div
                className="slide-banner"
                style={{ width: "100%", height: "270px" }}
              >
                <div className="slide-banner-top">
                  <img
                    src={slide?.length >= 2 ? slide[0].image : ""}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
                <div className="slide-banner-bottom">
                  <img
                    src={slide?.length >= 2 ? slide[1].image : ""}
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
