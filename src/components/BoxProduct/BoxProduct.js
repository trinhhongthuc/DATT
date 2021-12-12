import Rating from "@mui/material/Rating";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as FreeShip } from "../../assets/Image/ship.svg";
const BoxProduct = ({ product }) => {
  const [value, setValue] = useState("");
  return (
    <div className="col-xs-2-4 col-lg-2" style={{ padding: "0 5px" }}>
      <Link to={`/product/${product.id}`} className="box-product">
        {product.sale > 0 && (
          <div className="box-product-sales">
            <p className="box-product-sales-number">{product.sale}</p>
            <p className="box-product-sales-text">Giảm</p>
          </div>
        )}

        <div className="box-product-love">
          <div className="box-product-love-wrapper">
            <span>Yêu thích</span>
          </div>
        </div>

        <div className="box-product-img">
          <img src={product.avatarProduct} alt="" />
        </div>
        <div className="box-product-bottom">
          <p className="box-product-bottom-description">
            {product.nameProduct.length > 45
              ? product.nameProduct.slice(0, 45) + "..."
              : product.nameProduct}
          </p>

          <div className="box-product-bottom-price">
            <p className="box-product-bottom-price-old">
              {" "}
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "VND",
              }).format(product.infoBuyProduct.price)}
            </p>
            {/* <p>-</p>
            <p className="box-product-bottom-price-now">30.000</p> */}

            <div className="free-ship">
              <FreeShip />
            </div>
          </div>

          <div className="box-product-bottom-evaluate">
            <div className="box-product-bottom-evaluate-rate">
              <Rating
                name="simple-controlled"
                value={product.rating}
                // onChange={(event, newValue) => {
                //   setValue(newValue);
                // }}
              />
            </div>
            <div className="box-product-bottom-evaluate-buy">
              Đã bán {product.productBuy}
            </div>
          </div>
        </div>
        <div className="search-product">Tìm sản phẩm tương tự</div>
      </Link>
    </div>
  );
};

export default BoxProduct;
