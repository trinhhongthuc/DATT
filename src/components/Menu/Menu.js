import React from "react";
import Slider from "react-slick";
import Container from "@mui/material/Container";
import maytinh from "../../assets/Image/Menu/maytinh.png";
import { Link } from "react-router-dom";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: "1",
        right: "10px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        zIndex: "1",
        left: "10px",
      }}
      onClick={onClick}
    />
  );
}

const Menu = () => {
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 7,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
    slidesToScroll: 7,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="menu">
      <Container>
        <div className="menu-wrapper">
          <div className="row">
            <div className="col-xl-12" style={{ background: "#fff" }}>
              <h2 className="menu-title">DANH MỤC</h2>
            </div>
          </div>

          <div className="row">
            <Slider {...settings} style={{ width: "100%", background: "#fff" }}>
              {[1, 2, 3, 1, 1, 11, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1].map(
                (item, index) => {
                  return (
                    <Link to="/product-menu" className="banner-wrapper">
                      <div className="banner-wrapper-img">
                        <img src={maytinh} alt="" />
                      </div>
                      <div className="banner-wrapper-title">
                        <h5>Máy tính & la asd adsaptop {index}</h5>
                      </div>
                    </Link>
                  );
                }
              )}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
