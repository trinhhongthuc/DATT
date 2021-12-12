import React from "react";
import InformationShop from "./InformationShop/InformationShop";
import MenuSearch from "./MenuSearch/MenuSearch";
import Container from "@mui/material/Container";
import BoxProduct from "./../../components/BoxProduct/BoxProduct";

const Shop = () => {
  return (
    <div className="shop" backgroundColor="#fff">
      <InformationShop />
      <MenuSearch />

      <Container>
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
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
          <BoxProduct />
        </div>
      </Container>
    </div>
  );
};

export default Shop;
