import React from "react";
import Container from "@mui/material/Container";
import BoxProduct from "../../components/BoxProduct/BoxProduct";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
const ShowAllProduct = () => {
  return (
    <div className="show-all-product">
      <Container>
        <div className="row">
          <div className="col-xl-12">
            <div className="show-all-product-header">
              <h1>Tất cả</h1>
              <div className="show-all-product-header-border"></div>
            </div>
          </div>
        </div>

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
        </div>

        <div className="row">
          <div className="col-xl-12 mt-5 mb-5">
            <div className="show-all-product-pagination">
              <Stack spacing={2}>
                <Pagination count={10} color="primary" size="large" />
              </Stack>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShowAllProduct;
