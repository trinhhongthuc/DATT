import React from "react";
import Container from "@mui/material/Container";
import flashSales from "../../assets/Image/flashSale.png";
import Slider from "react-slick";
import product from "../../assets/Image/product/prd1.jfif";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const FlashSale = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="flash-sales">
      <Container>
        <div className="row">
          <div className="flash-sales-header">
            <div className="flash-sales-header-img">
              <img src={flashSales} alt="" />
            </div>
            <Link to="#" className="flash-sales-header-see-all">
              Xem tất cả
              <ChevronRightIcon />
            </Link>
          </div>
        </div>
        <div className="row">
          <Slider {...settings}>
            <div className="flash-sales-box">
              <div className="box-product-sales">
                <p className="box-product-sales-number">40%</p>
                <p className="box-product-sales-text">Giảm</p>
              </div>
              <div className="flash-sales-box-img">
                <img src={product} alt="" />
              </div>
              <p className="flash-sales-box-price">
                <span>đ</span>89.000
              </p>
              <p className="flash-sales-box-progress">
                <span>đã bán 10</span>
                <div
                  className="flash-sales-box-progress-background"
                  style={{ width: "10%" }}
                ></div>
              </p>
            </div>
            <div className="flash-sales-box">
              {" "}
              <div className="box-product-sales">
                <p className="box-product-sales-number">40%</p>
                <p className="box-product-sales-text">Giảm</p>
              </div>
              <div className="flash-sales-box-img">
                <img src={product} alt="" />
              </div>
              <p className="flash-sales-box-price">39.000</p>
              <p className="flash-sales-box-progress">
                <span>đã bán 10</span>
                <div
                  className="flash-sales-box-progress-background"
                  style={{ width: "10%" }}
                ></div>
              </p>
            </div>
            <div className="flash-sales-box">
              {" "}
              <div className="box-product-sales">
                <p className="box-product-sales-number">40%</p>
                <p className="box-product-sales-text">Giảm</p>
              </div>
              <div className="flash-sales-box-img">
                <img src={product} alt="" />
              </div>
              <p className="flash-sales-box-price">29.000</p>
              <p className="flash-sales-box-progress">
                <span>đã bán 10</span>
                <div
                  className="flash-sales-box-progress-background"
                  style={{ width: "10%" }}
                ></div>
              </p>
            </div>
            <div className="flash-sales-box">
              {" "}
              <div className="box-product-sales">
                <p className="box-product-sales-number">40%</p>
                <p className="box-product-sales-text">Giảm</p>
              </div>
              <div className="flash-sales-box-img">
                <img src={product} alt="" />
              </div>
              <p className="flash-sales-box-price">19.000</p>
              <p className="flash-sales-box-progress">
                <span>đã bán 10</span>
                <div
                  className="flash-sales-box-progress-background"
                  style={{ width: "10%" }}
                ></div>
              </p>
            </div>
            <div className="flash-sales-box">
              {" "}
              <div className="box-product-sales">
                <p className="box-product-sales-number">40%</p>
                <p className="box-product-sales-text">Giảm</p>
              </div>
              <div className="flash-sales-box-img">
                <img src={product} alt="" />
              </div>
              <p className="flash-sales-box-price">49.000</p>
              <p className="flash-sales-box-progress">
                <span>đã bán 10</span>
                <div
                  className="flash-sales-box-progress-background"
                  style={{ width: "10%" }}
                ></div>
              </p>
            </div>
            <div className="flash-sales-box">
              {" "}
              <div className="box-product-sales">
                <p className="box-product-sales-number">40%</p>
                <p className="box-product-sales-text">Giảm</p>
              </div>
              <div className="flash-sales-box-img">
                <img src={product} alt="" />
              </div>
              <p className="flash-sales-box-price">59.000</p>
              <p className="flash-sales-box-progress">
                <span>đã bán 10</span>
                <div
                  className="flash-sales-box-progress-background"
                  style={{ width: "10%" }}
                ></div>
              </p>
            </div>
            <div className="flash-sales-box">
              {" "}
              <div className="box-product-sales">
                <p className="box-product-sales-number">40%</p>
                <p className="box-product-sales-text">Giảm</p>
              </div>
              <div className="flash-sales-box-img">
                <img src={product} alt="" />
              </div>
              <p className="flash-sales-box-price">69.000</p>
              <p className="flash-sales-box-progress">
                <span>đã bán 10</span>
                <div
                  className="flash-sales-box-progress-background"
                  style={{ width: "10%" }}
                ></div>
              </p>
            </div>
            <div className="flash-sales-box">
              {" "}
              <div className="box-product-sales">
                <p className="box-product-sales-number">40%</p>
                <p className="box-product-sales-text">Giảm</p>
              </div>
              <div className="flash-sales-box-img">
                <img src={product} alt="" />
              </div>
              <p className="flash-sales-box-price">79.000</p>
              <p className="flash-sales-box-progress">
                <span>đã bán 10</span>
                <div
                  className="flash-sales-box-progress-background"
                  style={{ width: "10%" }}
                ></div>
              </p>
            </div>
            <div className="flash-sales-box">
              {" "}
              <div className="box-product-sales">
                <p className="box-product-sales-number">40%</p>
                <p className="box-product-sales-text">Giảm</p>
              </div>
              <div className="flash-sales-box-img">
                <img src={product} alt="" />
              </div>
              <p className="flash-sales-box-price">89.000</p>
              <p className="flash-sales-box-progress">
                <span>đã bán 10</span>
                <div
                  className="flash-sales-box-progress-background"
                  style={{ width: "10%" }}
                ></div>
              </p>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default FlashSale;
