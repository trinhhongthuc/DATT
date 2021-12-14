import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
// icons for
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import Container from "@mui/material/Container";
import moment from "moment";
import React from "react";
const InformationShop = ({ shop, id, lengthProduct }) => {
  return (
    <>
      <div className="info-shop" style={{ background: "#fff" }}>
        <Container>
          <div className="row">
            <div className="col-xl-12">
              <div className="info-shop-wrapper">
                <div className="info-shop-wrapper-avatar">
                  <div className="img">
                    <img src={!!shop && shop.photoURL} alt="" />
                  </div>
                  <div className="content">
                    <h5>{!!shop && shop.displayName}</h5>

                    <p>Online 9 giờ trước</p>
                  </div>
                </div>

                <ul>
                  <li>
                    <h6>
                      <StoreMallDirectoryIcon />
                      Sản phẩm:
                    </h6>

                    <p>{lengthProduct}</p>
                  </li>
                  <li>
                    <h6>
                      <StarOutlineIcon />
                      Đánh giá:
                    </h6>

                    <p>2,5k</p>
                  </li>
                  <li>
                    <h6>
                      <PeopleOutlineIcon />
                      Tham gia:
                    </h6>

                    <p>
                      {" "}
                      {moment(
                        new Date(!!shop && shop.createdAt?.seconds * 1000)
                      ).fromNow()}{" "}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="info-menu">
        <Container>
          <div className="row">
            <div className="col-xl-12">
              <div className="info-menu-wrapper">
                <ul>
                  <li>
                    Tất cả sản phẩm
                    <p></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="info-description">
        <Container>
          <div className="row">
            <div className="info-description-wrapper" style={{ width: "100%" }}>
              <h5 className="heading">THÔNG TIN SHOP</h5>
              <p>{!!shop && shop.description} </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default InformationShop;
