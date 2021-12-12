import Container from "@mui/material/Container";
import React from "react";
import { Input } from "reactstrap";

const DetailProduct = ({ detailProduct, setDetailProduct }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="detail-product">
      <Container>
        <div className="row">
          <div className="col-xl-12">
            <div className="detail-product-wrapper">
              <h5 className="heading">Thông tin chi tiết</h5>
              <ul className="content">
                <li>
                  <label htmlFor="">Thương hiệu</label>{" "}
                  <Input
                    placeholder="Thương hiệu sản phẩm"
                    type="text"
                    value={detailProduct.trademark}
                    onChange={(e) =>
                      setDetailProduct({
                        ...detailProduct,
                        trademark: e.target.value,
                      })
                    }
                  />
                </li>

                <li>
                  <label htmlFor="">Xuất sứ</label>{" "}
                  <Input
                    placeholder="Xuất xứ sản phẩm"
                    type="text"
                    value={detailProduct.origin}
                    onChange={(e) =>
                      setDetailProduct({
                        ...detailProduct,
                        origin: e.target.value,
                      })
                    }
                  />
                </li>

                <li>
                  <label htmlFor="">Chất liệu</label>{" "}
                  <Input
                    placeholder="Chất liệu sản phẩm"
                    type="text"
                    value={detailProduct.material}
                    onChange={(e) =>
                      setDetailProduct({
                        ...detailProduct,
                        material: e.target.value,
                      })
                    }
                  />
                </li>

                <li>
                  <label htmlFor="">Hạn bảo hành</label>{" "}
                  <Input
                    placeholder="Hạn bảo hành"
                    type="text"
                    value={detailProduct.insurance}
                    onChange={(e) =>
                      setDetailProduct({
                        ...detailProduct,
                        insurance: e.target.value,
                      })
                    }
                  />
                </li>

                <li>
                  <label htmlFor="">Loại bảo hành</label>{" "}
                  <Input
                    placeholder="Loại bảo hành"
                    type="text"
                    value={detailProduct.typeInsurance}
                    onChange={(e) =>
                      setDetailProduct({
                        ...detailProduct,
                        typeInsurance: e.target.value,
                      })
                    }
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailProduct;
