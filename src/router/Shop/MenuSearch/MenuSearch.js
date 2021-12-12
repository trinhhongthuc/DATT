import React from "react";
import Container from "@mui/material/Container";
import { Input } from "reactstrap";
import Button from "@mui/material/Button";

const MenuSearch = () => {
  return (
    <div className="menu-search">
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
    </div>
  );
};

export default MenuSearch;
