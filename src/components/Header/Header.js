import React from "react";
import Container from "@mui/material/Container";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
// img
import logo from "../../assets/Image/logo.png";
import cart from "../../assets/Image/cart.png";
import pr1 from "../../assets/Image/product/imgpr1.jpg";
const Header = () => {
  const length = 1;
  return (
    <>
      <div className="header">
        <Container>
          <div className="row">
            <div className="header-top">
              <div className="header-top-left">
                <ul>
                  <li>
                    <Link to="/user">Trở thành người bán của shoppe</Link>
                  </li>
                  <li>
                    <p>Kết nối</p>
                    <Link to="#" className="icon-facebook">
                      <FacebookIcon />
                    </Link>
                    <Link to="#" className="icon-instagram">
                      <InstagramIcon />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="header-top-right">
                <ul>
                  <li className="header-top-right-li-notification">
                    {" "}
                    <NotificationsIcon />
                    Thông báo
                    {/* Có thông báo */}
                    <div className="notification">
                      <h3>Thông báo mới nhận</h3>
                      <ul>
                        <li>
                          <div className="notification-img">
                            <img src={pr1} alt="" />
                          </div>

                          <div className="notification-left">
                            <h3>Đừng bỏ lỡ ưu đãi</h3>
                            <p>
                              Số điện thoại 0935945052 đã hủy liên kiết với tài
                              khoản email trinhhongthuc57@gmail.com
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="notification-img">
                            <img src={pr1} alt="" />
                          </div>

                          <div className="notification-left">
                            <h3>Đừng bỏ lỡ ưu đãi</h3>
                            <p>
                              Số điện thoại 0935945052 đã hủy liên kiết với tài
                              khoản email trinhhongthuc57@gmail.com
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="notification-img">
                            <img src={pr1} alt="" />
                          </div>

                          <div className="notification-left">
                            <h3>Đừng bỏ lỡ ưu đãi</h3>
                            <p>
                              Số điện thoại 0935945052 đã hủy liên kiết với tài
                              khoản email trinhhongthuc57@gmail.com
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="notification-img">
                            <img src={pr1} alt="" />
                          </div>

                          <div className="notification-left">
                            <h3>Đừng bỏ lỡ ưu đãi</h3>
                            <p>
                              Số điện thoại 0935945052 đã hủy liên kiết với tài
                              khoản email trinhhongthuc57@gmail.com
                            </p>
                          </div>
                        </li>
                      </ul>
                      <Link to="#" className="show-all">
                        Xem tất cả
                      </Link>
                    </div>
                  </li>

                  <li>
                    <Link to="/register">Đăng ký</Link>
                  </li>
                  <li>
                    <Link to="/login">Đăng nhập</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="header-bottom">
              <Link to="/" className="header-bottom-logo">
                TMĐT
              </Link>

              <div className="header-bottom-wrapper">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter search product name"
                />
                <div className="wrapper-icon-search">
                  <SearchIcon />
                </div>
              </div>

              <Link to="#" className="header-bottom-cart">
                <ShoppingCartIcon />
                {/* cart không có sản phẩm  */}
                {/* {length == 0 && (
                  <div className="cart-box ">
                    <div className="cart-box-wrapper">
                      <img src={cart} alt="" />
                    </div>
                    <p className="mt-4">Chưa có sản phẩm</p>
                  </div>
                )} */}
                {/* cart có sản phẩm  */}
                {/* {length > 0 && (
                  <div className="cart-box ">
                    <h3 className="cart-box-heading">Sản phẩm mới thêm</h3>
                    <ul className="cart-box-list">
                      <li className="cart-box-item">
                        <div className="cart-box-item-img">
                          <img src={pr1} alt="" />
                        </div>
                        <div className="cart-box-item-description">
                          dasdasdaaaaa dadasd ad đa asdasd asda sdads
                        </div>
                        <div className="cart-box-item-price">1.000.000đ</div>
                      </li>

                      <li className="cart-box-item">
                        <div className="cart-box-item-img">
                          <img src={pr1} alt="" />
                        </div>
                        <div className="cart-box-item-description">
                          dasdasdaaaaa dadasd ad đa asdasd asda sdads
                        </div>
                        <div className="cart-box-item-price">1.000.000đ</div>
                      </li>

                      <li className="cart-box-item">
                        <div className="cart-box-item-img">
                          <img src={pr1} alt="" />
                        </div>
                        <div className="cart-box-item-description">
                          dasdasdaaaaa dadasd ad đa asdasd asda sdads
                        </div>
                        <div className="cart-box-item-price">1.000.000đ</div>
                      </li>

                      <li className="cart-box-item">
                        <div className="cart-box-item-img">
                          <img src={pr1} alt="" />
                        </div>
                        <div className="cart-box-item-description">
                          dasdasdaaaaa dadasd ad đa asdasd asda sdads
                        </div>
                        <div className="cart-box-item-price">1.000.000đ</div>
                      </li>
                      <li className="cart-box-item">
                        <div className="cart-box-item-img">
                          <img src={pr1} alt="" />
                        </div>
                        <div className="cart-box-item-description">
                          dasdasdaaaaa dadasd ad đa asdasd asda sdads
                        </div>
                        <div className="cart-box-item-price">1.000.000đ</div>
                      </li>
                    </ul>
                  </div>
                )} */}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
