import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/Image/product/prd1.jfif";
import Rating from "@mui/material/Rating";
import { ReactComponent as FreeShip } from "../../assets/Image/ship.svg";
const BoxProduct = () => {
  const [value, setValue] = useState("");
  return (
    <div className="col-xl-2 col-lg-2" style={{ padding: "0 5px" }}>
      <Link to="#" className="box-product">
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
          <img src={img} alt="" />
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
              <Rating
                name="simple-controlled"
                value={3.5}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </div>
            <div className="box-product-bottom-evaluate-buy">Đã bán 5.3k</div>
          </div>
        </div>
        <div className="search-product">Tìm sản phẩm tương tự</div>
      </Link>
    </div>
  );
};

export default BoxProduct;
