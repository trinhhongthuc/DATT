import React from "react";
import Container from "@mui/material/Container";
import Slider from "react-slick";
import slide1 from "../../assets/Image/slide/slide1.png";
import slide2 from "../../assets/Image/slide/slide2.png";
import slide3 from "../../assets/Image/slide/slide3.png";
import slide4 from "../../assets/Image/slide/slide4.png";
import slide5 from "../../assets/Image/slide/slide5.png";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { ReactComponent as FreeShip } from "../../assets/Image/ship.svg";
import { Button } from "reactstrap";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import product from "../../assets/Image/product/prd1.jfif";

import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import BoxProduct from "./../../components/BoxProduct/BoxProduct";
const DetailProduct = () => {
  const arr = [slide1, slide2, slide3, slide4, slide5];
  const settings = {
    customPaging: function (i) {
      return (
        <Link to={"#"}>
          <img src={arr[i]} alt="slide1" />
        </Link>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings2 = {
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
    <div className="detail-product">
      <Container>
        <div className="row">
          <div className="product-detail-wrapper-top">
            <div className="product-detail-wrapper-top-left">
              <Slider {...settings}>
                <div className="product-detail-wrapper-top-left-img">
                  <img src={slide1} alt="slide1" />
                </div>
                <div className="product-detail-wrapper-top-left-img">
                  <img src={slide2} alt="slide1" />
                </div>
                <div className="product-detail-wrapper-top-left-img">
                  <img src={slide3} alt="slide1" />
                </div>
                <div className="product-detail-wrapper-top-left-img">
                  <img src={slide4} alt="slide1" />
                </div>
              </Slider>
            </div>
            <div className="product-detail-wrapper-top-right">
              <h3 className="product-detail-wrapper-top-right-title">
                Tai Nghe Không Dây Đầy Đủ Chức Năng Dùng Cho Điện Thoại, Laptop
              </h3>
              <div className="product-detail-wrapper-top-right-rating">
                <div className="product-detail-wrapper-top-right-rating-value">
                  <Rating name="simple-controlled" value={3.5} />
                </div>
                <p className="product-detail-wrapper-top-right-rating-number">
                  20 <span>Đánh giá</span>
                </p>
                <p className="product-detail-wrapper-top-right-rating-productbuy">
                  20 <span>Đã bán</span>
                </p>
              </div>
              <div className="product-detail-wrapper-top-right-price">
                <p className="product-detail-wrapper-top-right-price-old">
                  140.000đ
                </p>
                <p className="product-detail-wrapper-top-right-price-new">
                  700.000đ
                </p>
              </div>

              <div className="product-detail-wrapper-top-right-ship">
                <h6 className="product-detail-wrapper-top-right-ship-title">
                  Vận Chuyển
                </h6>
                {/* <p className="product-detail-wrapper-top-right-ship-text">
                  <FreeShip /> <span>Miễn phí vận chuyển</span>
                </p> */}
                <p className="product-detail-wrapper-top-right-ship-price">
                  <span className="product-detail-wrapper-top-right-ship-price-number">
                    30.000đ
                  </span>
                </p>
              </div>

              <div className="product-detail-wrapper-top-right-choose-number">
                <h6 className="product-detail-wrapper-top-right-choose-number-title">
                  Số lượng
                </h6>
                <div className="number-choose-buy">
                  <span>-</span>
                  <span>9</span>
                  <span>+</span>
                </div>
                <div className="number-product-buy">257 sản phẩm có sẳn</div>
              </div>
              <div className="product-detail-wrapper-top-right-button">
                <Button
                  className="btn-1 ml-1"
                  color="warning"
                  outline
                  type="button"
                >
                  <AddShoppingCartIcon />
                  Thêm vào giỏ hàng
                </Button>
                <Button className="btn-1 ml-1" color="warning" type="button">
                  Mua ngay
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="page-product-shop">
            <div className="page-product-shop-left">
              <div className="page-product-shop-left-wrapper">
                <div className="page-product-shop-left-wrapper-avatar">
                  <img src={slide5} alt="slide5" />
                </div>
                <div className="page-product-shop-left-wrapper-description">
                  <h5>tongkhotaitaogiatruyen</h5>
                  <p>Online 17 Phút Trước</p>
                  <div className="description-wrapper">
                    <div className="description-chat">
                      <ChatBubbleIcon />
                      Chát ngay
                    </div>
                    <div className="description-shop">
                      <StoreMallDirectoryIcon />
                      Xem shop
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-product-shop-right">
              <ul>
                <li>
                  <span>Đánh giá</span>
                  19
                </li>
                <li>
                  <span>Tý lệ phản hồi</span>
                  19%
                </li>
                <li>
                  <span>Tham gia</span>
                  20 tháng trước
                </li>
                <li>
                  <span>Sản phẩm</span>
                  19
                </li>
                <li>
                  <span>Người theo dõi</span>
                  19
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="row "
          style={{ background: "#fff", padding: "12px 0", marginTop: "25px" }}
        >
          <h3
            style={{
              background: "#fff",
              color: "rgba(0,0,0,0.8)",
              fontSize: "18px",
              FontWeight: "500",
              padding: " 0 12px 12px 12px",
              marginBottom: "12px",
              borderBottom: "0.5px solid rgba(0,0,0,.09)",
              width: "100%",
            }}
          >
            Sản phẩm liên quan
          </h3>
          <Slider {...settings2} style={{ width: "100%" }}>
            <div className="detail-product-relate">
              <Link to="/product/1" className="box-product">
                <div className="box-product-sales">
                  <p className="box-product-sales-number">40%</p>
                  <p className="box-product-sales-text">Giảm</p>
                </div>

                <div className="box-product-love">
                  <div className="box-product-love-wrapper">
                    <span>Yêu thích</span>
                  </div>
                </div>

                <div className="box-product-img">
                  <img src={product} alt="" />
                </div>
                <div className="box-product-bottom">
                  <p className="box-product-bottom-description">
                    Tai Nghe Bluetooth AirDots Redmi2 True Công...
                  </p>

                  <div className="box-product-bottom-price">
                    <p className="box-product-bottom-price-old">40.000</p>
                    <p>-</p>
                    <p className="box-product-bottom-price-now">30.000</p>

                    <div className="free-ship">
                      <FreeShip />
                    </div>
                  </div>

                  <div className="box-product-bottom-evaluate">
                    <div className="box-product-bottom-evaluate-rate">
                      <Rating name="simple-controlled" value={3.5} />
                    </div>
                    <div className="box-product-bottom-evaluate-buy">
                      Đã bán 5.3k
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="detail-product-relate">
              <Link to="/product/1" className="box-product">
                <div className="box-product-sales">
                  <p className="box-product-sales-number">40%</p>
                  <p className="box-product-sales-text">Giảm</p>
                </div>

                <div className="box-product-love">
                  <div className="box-product-love-wrapper">
                    <span>Yêu thích</span>
                  </div>
                </div>

                <div className="box-product-img">
                  <img src={product} alt="" />
                </div>
                <div className="box-product-bottom">
                  <p className="box-product-bottom-description">
                    Tai Nghe Bluetooth AirDots Redmi2 True Công...
                  </p>

                  <div className="box-product-bottom-price">
                    <p className="box-product-bottom-price-old">40.000</p>
                    <p>-</p>
                    <p className="box-product-bottom-price-now">30.000</p>

                    <div className="free-ship">
                      <FreeShip />
                    </div>
                  </div>

                  <div className="box-product-bottom-evaluate">
                    <div className="box-product-bottom-evaluate-rate">
                      <Rating name="simple-controlled" value={3.5} />
                    </div>
                    <div className="box-product-bottom-evaluate-buy">
                      Đã bán 5.3k
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="detail-product-relate">
              <Link to="/product/1" className="box-product">
                <div className="box-product-sales">
                  <p className="box-product-sales-number">40%</p>
                  <p className="box-product-sales-text">Giảm</p>
                </div>

                <div className="box-product-love">
                  <div className="box-product-love-wrapper">
                    <span>Yêu thích</span>
                  </div>
                </div>

                <div className="box-product-img">
                  <img src={product} alt="" />
                </div>
                <div className="box-product-bottom">
                  <p className="box-product-bottom-description">
                    Tai Nghe Bluetooth AirDots Redmi2 True Công...
                  </p>

                  <div className="box-product-bottom-price">
                    <p className="box-product-bottom-price-old">40.000</p>
                    <p>-</p>
                    <p className="box-product-bottom-price-now">30.000</p>

                    <div className="free-ship">
                      <FreeShip />
                    </div>
                  </div>

                  <div className="box-product-bottom-evaluate">
                    <div className="box-product-bottom-evaluate-rate">
                      <Rating name="simple-controlled" value={3.5} />
                    </div>
                    <div className="box-product-bottom-evaluate-buy">
                      Đã bán 5.3k
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="detail-product-relate">
              <Link to="/product/1" className="box-product">
                <div className="box-product-sales">
                  <p className="box-product-sales-number">40%</p>
                  <p className="box-product-sales-text">Giảm</p>
                </div>

                <div className="box-product-love">
                  <div className="box-product-love-wrapper">
                    <span>Yêu thích</span>
                  </div>
                </div>

                <div className="box-product-img">
                  <img src={product} alt="" />
                </div>
                <div className="box-product-bottom">
                  <p className="box-product-bottom-description">
                    Tai Nghe Bluetooth AirDots Redmi2 True Công...
                  </p>

                  <div className="box-product-bottom-price">
                    <p className="box-product-bottom-price-old">40.000</p>
                    <p>-</p>
                    <p className="box-product-bottom-price-now">30.000</p>

                    <div className="free-ship">
                      <FreeShip />
                    </div>
                  </div>

                  <div className="box-product-bottom-evaluate">
                    <div className="box-product-bottom-evaluate-rate">
                      <Rating name="simple-controlled" value={3.5} />
                    </div>
                    <div className="box-product-bottom-evaluate-buy">
                      Đã bán 5.3k
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="detail-product-relate">
              <Link to="/product/1" className="box-product">
                <div className="box-product-sales">
                  <p className="box-product-sales-number">40%</p>
                  <p className="box-product-sales-text">Giảm</p>
                </div>

                <div className="box-product-love">
                  <div className="box-product-love-wrapper">
                    <span>Yêu thích</span>
                  </div>
                </div>

                <div className="box-product-img">
                  <img src={product} alt="" />
                </div>
                <div className="box-product-bottom">
                  <p className="box-product-bottom-description">
                    Tai Nghe Bluetooth AirDots Redmi2 True Công...
                  </p>

                  <div className="box-product-bottom-price">
                    <p className="box-product-bottom-price-old">40.000</p>
                    <p>-</p>
                    <p className="box-product-bottom-price-now">30.000</p>

                    <div className="free-ship">
                      <FreeShip />
                    </div>
                  </div>

                  <div className="box-product-bottom-evaluate">
                    <div className="box-product-bottom-evaluate-rate">
                      <Rating name="simple-controlled" value={3.5} />
                    </div>
                    <div className="box-product-bottom-evaluate-buy">
                      Đã bán 5.3k
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="detail-product-relate">
              <Link to="/product/1" className="box-product">
                <div className="box-product-sales">
                  <p className="box-product-sales-number">40%</p>
                  <p className="box-product-sales-text">Giảm</p>
                </div>

                <div className="box-product-love">
                  <div className="box-product-love-wrapper">
                    <span>Yêu thích</span>
                  </div>
                </div>

                <div className="box-product-img">
                  <img src={product} alt="" />
                </div>
                <div className="box-product-bottom">
                  <p className="box-product-bottom-description">
                    Tai Nghe Bluetooth AirDots Redmi2 True Công...
                  </p>

                  <div className="box-product-bottom-price">
                    <p className="box-product-bottom-price-old">40.000</p>
                    <p>-</p>
                    <p className="box-product-bottom-price-now">30.000</p>

                    <div className="free-ship">
                      <FreeShip />
                    </div>
                  </div>

                  <div className="box-product-bottom-evaluate">
                    <div className="box-product-bottom-evaluate-rate">
                      <Rating name="simple-controlled" value={3.5} />
                    </div>
                    <div className="box-product-bottom-evaluate-buy">
                      Đã bán 5.3k
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="detail-product-relate">
              <Link to="/product/1" className="box-product">
                <div className="box-product-sales">
                  <p className="box-product-sales-number">40%</p>
                  <p className="box-product-sales-text">Giảm</p>
                </div>

                <div className="box-product-love">
                  <div className="box-product-love-wrapper">
                    <span>Yêu thích</span>
                  </div>
                </div>

                <div className="box-product-img">
                  <img src={product} alt="" />
                </div>
                <div className="box-product-bottom">
                  <p className="box-product-bottom-description">
                    Tai Nghe Bluetooth AirDots Redmi2 True Công...
                  </p>

                  <div className="box-product-bottom-price">
                    <p className="box-product-bottom-price-old">40.000</p>
                    <p>-</p>
                    <p className="box-product-bottom-price-now">30.000</p>

                    <div className="free-ship">
                      <FreeShip />
                    </div>
                  </div>

                  <div className="box-product-bottom-evaluate">
                    <div className="box-product-bottom-evaluate-rate">
                      <Rating name="simple-controlled" value={3.5} />
                    </div>
                    <div className="box-product-bottom-evaluate-buy">
                      Đã bán 5.3k
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="detail-product-relate">
              <Link to="/product/1" className="box-product">
                <div className="box-product-sales">
                  <p className="box-product-sales-number">40%</p>
                  <p className="box-product-sales-text">Giảm</p>
                </div>

                <div className="box-product-love">
                  <div className="box-product-love-wrapper">
                    <span>Yêu thích</span>
                  </div>
                </div>

                <div className="box-product-img">
                  <img src={product} alt="" />
                </div>
                <div className="box-product-bottom">
                  <p className="box-product-bottom-description">
                    Tai Nghe Bluetooth AirDots Redmi2 True Công...
                  </p>

                  <div className="box-product-bottom-price">
                    <p className="box-product-bottom-price-old">40.000</p>
                    <p>-</p>
                    <p className="box-product-bottom-price-now">30.000</p>

                    <div className="free-ship">
                      <FreeShip />
                    </div>
                  </div>

                  <div className="box-product-bottom-evaluate">
                    <div className="box-product-bottom-evaluate-rate">
                      <Rating name="simple-controlled" value={3.5} />
                    </div>
                    <div className="box-product-bottom-evaluate-buy">
                      Đã bán 5.3k
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Slider>
        </div>

        <div
          className="row"
          style={{ background: "#fff", padding: "25px", marginTop: "25px" }}
        >
          <h3 className="detail-product__heading" >
          ĐÁNH GIÁ SẢN PHẨM
          </h3>
          <div className="detail-product-feedback">
            <div className="detail-product-feedback-rating">
              <div className="detail-product-feedback-rating-title">
                <span>3.9</span>trên 5
              </div>

              <div className="detail-product-feedback-rating-stars">
                <Rating name="simple-controlled" value={3.5} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailProduct;
