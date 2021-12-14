import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { db } from "firebase/config";
import React from "react";
import BoxProduct from "./../../components/BoxProduct/BoxProduct";
const ShowAllProduct = () => {
  const [product, setProduct] = React.useState([]);
  const [lengthPagination, setLengthPagination] = React.useState(1);

  // get length pagination
  React.useEffect(() => {
    db.collection("Products")
      .where("status", "==", 0)
      .get()
      .then((snap) => {
        const size = snap.size / 1; // set so luong sanr pham hien thi 1 => 18
        setLengthPagination(Math.ceil(size));
      });
  }, []);

  // get product pagination
  React.useEffect(() => {
    db.collection("Products")
      .orderBy("createdAt", "desc")
      .where("status", "==", 0)
      .limit(1) // set laij limit sanr pham hien thi 1 => 18
      .get()
      .then((documentSnapshots) => {
        const data = documentSnapshots.docs.map((doc) => ({
          ...doc.data(),
          idDoc: doc.id,
        }));
        setProduct(data);
      });
  }, []);

  const handleChangePagination = (value) => {
    if (value === 1) {
      db.collection("Products")
        .orderBy("createdAt", "desc")
        .where("status", "==", 0)
        .limit(1) // set laij limit sanr pham hien thi 1 => 18
        .get()
        .then((documentSnapshots) => {
          const data = documentSnapshots.docs.map((doc) => ({
            ...doc.data(),
            idDoc: doc.id,
          }));
          setProduct(data);
        });
    } else {
      let index = (value - 1) * 1; // set laij limit sanr pham hien thi 1 => 18

      db.collection("Products")
        .orderBy("createdAt", "desc")
        .where("status", "==", 0)
        .limit(index)
        .get()
        .then((documentSnapshots) => {
          db.collection("Products")
            .orderBy("createdAt", "desc")
            .where("status", "==", 0)
            .startAfter(
              documentSnapshots.docs[documentSnapshots.docs.length - 1]
            )
            .limit(1)
            .get()
            .then((documentSnapshots) => {
              const data = documentSnapshots.docs.map((doc) => ({
                ...doc.data(),
                idDoc: doc.id,
              }));
              setProduct(data);
            });
        });
    }
  };

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
          {!!product &&
            product?.length > 0 &&
            product.map((item) => {
              return <BoxProduct product={item} key={item.id} />;
            })}
        </div>

        <div className="row">
          <div className="col-xl-12 mt-5 mb-5">
            <div className="show-all-product-pagination">
              <Stack spacing={2}>
                <Pagination
                  count={lengthPagination}
                  color="primary"
                  size="large"
                  defaultPage={1}
                  siblingCount={1}
                  onChange={(event, value) => {
                    handleChangePagination(value);
                  }}
                />
              </Stack>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ShowAllProduct;
