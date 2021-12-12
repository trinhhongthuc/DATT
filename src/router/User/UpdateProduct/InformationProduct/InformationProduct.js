import Container from "@mui/material/Container";
import React from "react";
import { Input } from "reactstrap";

const InformationProduct = ({ setInfoBuyProduct, infoBuyProduct }) => {
  return (
    <div className="info-product">
      <Container>
        <div className="row">
          <div className="col-xl-12">
            <div className="info-product-wrapper">
              <h5 className="heading">Thông tin bán hàng</h5>

              <div className="content">
                <ul>
                  <li>
                    <span>Giá</span>
                    <div className="content-input">
                      <Input
                        placeholder="Nhập giá sản phẩm"
                        type="text"
                        value={infoBuyProduct.price}
                        onChange={(e) =>
                          setInfoBuyProduct({
                            ...infoBuyProduct,
                            price: e.target.value,
                          })
                        }
                      />
                      <p>đ</p>
                    </div>
                  </li>
                  <li>
                    <span>Kho hàng</span>
                    <Input
                      placeholder="Nhập số lượng hàng"
                      type="text"
                      value={infoBuyProduct.countProduct}
                      onChange={(e) =>
                        setInfoBuyProduct({
                          ...infoBuyProduct,
                          countProduct: e.target.value,
                        })
                      }
                    />
                  </li>
                  <li>
                    <span>Khuyến mãi</span>

                    <div className="content-input">
                      <Input
                        placeholder="Nhập % khuyến mãi"
                        type="text"
                        value={infoBuyProduct.sale}
                        onChange={(e) =>
                          setInfoBuyProduct({
                            ...infoBuyProduct,
                            sale: e.target.value,
                          })
                        }
                      />
                      <p>%</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InformationProduct;
