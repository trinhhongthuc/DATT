import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Container from "@mui/material/Container";
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import flashSales from "../../assets/Image/flashSale.png";

const FlashSale = ({ product }) => {
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
            {!!product &&
              product?.length > 0 &&
              product.map((item) => {
                let width =
                  (item.productBuy / item.infoBuyProduct.countProduct) * 100;
                return (
                  <div className="flash-sales-box">
                    <div className="box-product-sales">
                      <p className="box-product-sales-number">
                        {item.infoBuyProduct.sale} %
                      </p>
                      <p className="box-product-sales-text">Giảm</p>
                    </div>
                    <div className="flash-sales-box-img">
                      <img src={item.avatarProduct} alt="avatar" />
                    </div>
                    <p className="flash-sales-box-price">
                      {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.infoBuyProduct.price)}
                    </p>
                    <p className="flash-sales-box-progress">
                      <span>đã bán {item.productBuy}</span>
                      <div
                        className="flash-sales-box-progress-background"
                        style={{ width: width }}
                      ></div>
                    </p>
                  </div>
                );
              })}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default FlashSale;
