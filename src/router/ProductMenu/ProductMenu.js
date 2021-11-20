import React from "react";
import SlideFullWidth from "../../components/SlideFullWidth/SlideFullWidth";
import Container from "@mui/material/Container";
import BoxProduct from "../../components/BoxProduct/BoxProduct";
import Button from "@mui/material/Button";
import { Input } from "reactstrap";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
const ProductMenu = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="product-menu" style={{ background: "#f5f5f5" }}>
      <SlideFullWidth />

      <Container>
        <div className="row">
          <div className="product-menu-top">
            <span class="product-menu-top__label">Sắp xếp theo:</span>
            <div className="product-menu-top__option">
              <div className="product-menu-top__option-wrapper-left">
                <div className="product-menu-top__option-price">
                  <select name="" id="" label="Giá">
                    <option value="" disabled>
                      Giá
                    </option>
                    <option value="">Giá: Thấp đến Cao</option>
                    <option value="">Giá: Cao đến Thấp</option>
                  </select>
                </div>
                <div className="product-menu-top__option-price-input">
                  <span>Khoảng giá:</span>
                  <Input placeholder="Từ" type="text" />
                  <p>-</p>
                  <Input placeholder="Đến" type="text" />
                </div>
              </div>

              <div className="product-menu-top__option-wrapper-right">
                {" "}
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "rgb(238, 77, 45)",
                    outLine: "none",
                  }}
                >
                  Tìm kiếm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="row">
          <div className="col-xl-2" style={{ padding: 0 }}>
            <div className="product-menu-wrapper-filter">
              <h5 className="product-menu-wrapper-filter-title">
                <FilterAltIcon />
                BỘ LỌC TÌM KIẾM
              </h5>
              <ul>
                <h6>Tình Trạng</h6>
                <li>
                  {" "}
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheck1"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      <span>Mới</span>
                    </label>
                  </div>
                </li>
              </ul>

              <ul>
                <h6>Dịch Vụ & khuyến mãi</h6>
                <li>
                  {" "}
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheck2"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck2"
                    >
                      <span>Free ship</span>
                    </label>
                  </div>
                </li>
              </ul>

              <div className="product-menu-wrapper-filter-button">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "rgb(238, 77, 45)",
                    outLine: "none",
                  }}
                >
                  Áp dụng
                </Button>
              </div>
            </div>
          </div>
          <div className="col-xl-10">
            <div className="row product-menu-wrapper-items">
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
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductMenu;
