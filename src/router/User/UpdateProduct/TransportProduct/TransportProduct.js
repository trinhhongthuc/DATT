import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import React from "react";
import { Input } from "reactstrap";

const TransportProduct = ({ setProductKG, productKG }) => {
  const [priceTransportProduct, setPriceTransportProduct] = React.useState("");

  return (
    <div className="transport-product">
      <Container>
        <div className="row">
          <div className="col-xl-12">
            <div className="transport-product-wrapper">
              <h5 className="heading">Vận chuyển</h5>
              <div className="content">
                <ul>
                  <li>
                    <span>Cân nặng đã đóng gói</span>
                    <div className="content-input">
                      <Input
                        placeholder="Nhập giá sản phẩm"
                        type="text"
                        value={productKG}
                        onChange={(e) => setProductKG(e.target.value)}
                      />
                      <p>kg</p>
                    </div>

                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "rgb(238, 77, 45)",
                        outLine: "none",
                      }}
                      className="mr-2"
                      onClick={() =>
                        setPriceTransportProduct(Number(productKG) * 30000)
                      }
                    >
                      Xác nhận
                    </Button>
                  </li>

                  <li>
                    <span>Phí vận chuyển</span>
                    <Input
                      placeholder="Phí vận chuyển"
                      type="text"
                      disabled={true}
                      value={`${new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "VND",
                      }).format(priceTransportProduct)}`}
                    />
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

export default TransportProduct;
