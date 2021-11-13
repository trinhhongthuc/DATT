import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Slider from "./../../components/Slider/Slider";
import Menu from "./../../components/Menu/Menu";
import Container from "@mui/material/Container";
import BoxProduct from "../../components/BoxProduct/BoxProduct";
import { Link } from "react-router-dom";
import FlashSale from "./../../components/FlashSales/FlashSale";
import Banner from "./../../components/Banner/Banner";
const Home = () => {
  const [active, setActive] = useState(0);
  return (
    <div
      className="home"
      style={{
        background: "#F5F5F5",
        padding: " 0 0 24px 0",
      }}
    >
      <Header />
      <Slider />
      <Menu />
      <Banner />
      <FlashSale />

      <Container>
        <div className="row">
          <ul className="tabs-header-product">
            <li class="tabs-header-product_li" onClick={() => setActive(0)}>
              {active == 0 ? (
                <div
                  class="tabs-header-product_li-active"
                  style={{ background: " rgb(238, 77, 45)" }}
                ></div>
              ) : (
                ""
              )}
              <span style={{ color: "rgb(238, 77, 45)" }}>GỢI Ý HÔM NAY</span>
            </li>
            <li class="tabs-header-product_li" onClick={() => setActive(1)}>
              {active == 1 ? (
                <div
                  class="tabs-header-product_li-active"
                  style={{ background: " rgb(238, 77, 45)" }}
                ></div>
              ) : (
                ""
              )}
              <span style={{ color: "rgb(238, 77, 45)" }}>
                SẢN PHẨM BÁN CHẠY
              </span>
            </li>
          </ul>
        </div>
        <div className="row">
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
        </div>
      </Container>

      <Container>
        <div className="row">
          <div className="col-xl-12">
            <div className="see-more">
              <Link to="#">Xem thêm</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
