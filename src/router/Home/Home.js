import Container from "@mui/material/Container";
import { db } from "firebase/config";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import BoxProduct from "../../components/BoxProduct/BoxProduct";
import Banner from "./../../components/Banner/Banner";
import FlashSale from "./../../components/FlashSales/FlashSale";
import Menu from "./../../components/Menu/Menu";
import Slider from "./../../components/Slider/Slider";
const Home = () => {
  const [active, setActive] = useState(0);
  const [listProduct, setListProduct] = useState([]);
  const [productSale, setProductSale] = useState([]);
  // get product

  React.useEffect(() => {
    if (active === 0) {
      db.collection("Products")
        .where("status", "==", 0)
        .limit(20)
        .get()
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            idDoc: doc.id,
          }));
          setListProduct(data);
        });
    } else if (active === 1) {
      db.collection("Products")
        .where("productBuy", ">", 0)
        .limit(20)
        .get()
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            idDoc: doc.id,
          }));
          setListProduct(data);
        });
    }
  }, [active]);

  React.useEffect(() => {
    db.collection("Products")
      .orderBy("infoBuyProduct.sale", "desc")
      .where("status", "==", 0)
      // .where("infoBuyProduct.sale", ">=", 10)
      .limit(15)
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          idDoc: doc.id,
        }));
        setProductSale(data);
      });
  }, []);

  return (
    <div
      className="home"
      style={{
        background: "#F5F5F5",
        padding: " 0 0 24px 0",
      }}
    >
      <Slider />
      <Menu />
      <Banner />
      <FlashSale product={productSale} />

      <Container>
        <div className="row">
          <ul className="tabs-header-product">
            <li class="tabs-header-product_li" onClick={() => setActive(0)}>
              {active === 0 ? (
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
              {active === 1 ? (
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
          {listProduct?.length > 0 &&
            listProduct.map((item) => {
              return <BoxProduct key={item.id} product={item} />;
            })}
        </div>
      </Container>

      <Container>
        <div className="row">
          <div className="col-xl-12">
            <div className="see-more">
              <Link to="/show-all-product">Xem thêm</Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
