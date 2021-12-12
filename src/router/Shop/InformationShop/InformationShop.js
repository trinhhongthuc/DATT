import React from "react";
import Container from "@mui/material/Container";
import avatar from "../../../assets/Image/avatar.png";

// icons for

import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
const InformationShop = () => {
  return (
    <>
      <div className="info-shop" style={{ background: "#fff" }}>
        <Container>
          <div className="row">
            <div className="col-xl-12">
              <div className="info-shop-wrapper">
                <div className="info-shop-wrapper-avatar">
                  <div className="img">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="content">
                    <h5>shopbanquanao giair</h5>

                    <p>Online 9 giờ trước</p>
                  </div>
                </div>

                <ul>
                  <li>
                    <h6>
                      <StoreMallDirectoryIcon />
                      Sản phẩm:
                    </h6>

                    <p>80</p>
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

                    <p>4 tháng trước</p>
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
            <div className="info-description-wrapper">
              <h5 className="heading">THÔNG TIN SHOP</h5>
              <p>
                do tình hình dịch bệnh nên một số khu vực bị phong toả. dẫn đến
                việc đơn hàng nhập kho và giao đến khách bị chậm trễ. mong quý
                khách thông cảm ạ
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default InformationShop;
