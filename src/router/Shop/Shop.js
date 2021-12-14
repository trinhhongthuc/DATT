import Container from "@mui/material/Container";
import { db } from "firebase/config";
import React from "react";
import { useParams } from "react-router-dom";
import BoxProduct from "./../../components/BoxProduct/BoxProduct";
import InformationShop from "./InformationShop/InformationShop";
import MenuSearch from "./MenuSearch/MenuSearch";

const Shop = () => {
  // id
  const id = useParams().id;
  const [shop, setShop] = React.useState("");
  const [productShop, setProductShop] = React.useState([]);

  React.useEffect(() => {
    if (id) {
      db.collection("users")
        .where("uid", "==", id)
        .get()
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            idDoc: doc.id,
          }));
          if (data) {
            setShop(data[0]);
          }
        });
    }
  }, [id]);

  React.useEffect(() => {
    if (id) {
      db.collection("Products")
        .where("idShop", "==", id)
        .where("status", "==", 0)
        .get()
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            idDoc: doc.id,
          }));
          if (data) {
            setProductShop(data);
          }
        });
    }
  }, [id]);
  return (
    <div className="shop" backgroundColor="#fff">
      <InformationShop
        shop={shop}
        id={id}
        lengthProduct={!!productShop ? productShop?.length : 0}
      />
      <MenuSearch />

      <Container>
        <div className="row">
          {!!productShop && productShop?.length > 0
            ? productShop.map((item) => {
                return <BoxProduct product={item} key={item.id} />;
              })
            : ""}
          {/* <BoxProduct />

          {}
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
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct /> */}
        </div>
      </Container>
    </div>
  );
};

export default Shop;
