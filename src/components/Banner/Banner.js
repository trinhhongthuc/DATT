import React from "react";
import Container from "@mui/material/Container";
import banner4 from "../../assets/Image/slide/slide1.png";
import banner2 from "../../assets/Image/slide/slide2.png";
import banner3 from "../../assets/Image/slide/slide3.png";
const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <div className="row" style={{ background: "#fff", padding: "10px" }}>
          <div className="banner-img">
            <img src={banner4} alt="" />
          </div>
          <div className="banner-img">
            <img src={banner2} alt="" />
          </div>
          <div className="banner-img">
            <img src={banner3} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
