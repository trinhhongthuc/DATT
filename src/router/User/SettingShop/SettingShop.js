import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
// icon
import ComputerIcon from "@mui/icons-material/Computer";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import React from "react";
import { Link } from "react-router-dom";
import { Input } from "reactstrap";
import { UserContext } from "./../../../Context/UserProvider";

const SettingShop = () => {
  const { user } = React.useContext(UserContext);

  const [nameShop, setNameShop] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [avatar, setAvatar] = React.useState("");

  React.useEffect(() => {
    if (user) {
      setNameShop(user.displayName);
      setAddress(user.address);
      setDescription(user.description);
      setAvatar(user.photoURL);
    }
  }, [user]);

  return (
    <div className="setting-shop">
      <Container>
        <div className="row">
          <div className="col-xl-12">
            <div className="setting-shop-wrapper">
              <div className="heading-shop">
                <h5>Hồ sơ shop</h5>
                <p>Xem tình trạng Shop và cập nhật hồ sơ Shop của bạn</p>
              </div>
              <div className="content">
                <div className="content-heading">
                  <h5>Thông tin cơ bản</h5>
                </div>

                <div className="content-wrapper">
                  <div className="left">
                    <div className="left-top">
                      <div className="left-top-wrapper">
                        <img src={avatar} alt="" />
                      </div>

                      <div className="left-top-input">
                        <label for="input-file">Sửa ảnh đại diện</label>
                        <input type="file" id="input-file" />
                      </div>
                    </div>

                    <ul>
                      <li>
                        <h6>
                          {" "}
                          <ComputerIcon />
                          Giao diện shop
                        </h6>
                        <Link to="#">
                          Xem <ArrowForwardIosIcon />{" "}
                        </Link>
                      </li>
                      <li>
                        <h6>
                          {" "}
                          <CardGiftcardIcon />
                          Sản phẩm
                        </h6>
                        <Link to="#">
                          Xem
                          <ArrowForwardIosIcon />{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="right">
                    <div className="right-input">
                      <span>Tên shop:</span>
                      <Input
                        placeholder="Tên shop"
                        type="text"
                        value={nameShop}
                        disabled={true}
                      />
                    </div>
                    <div className="right-input">
                      <span>Địa chỉ shop:</span>
                      <Input
                        placeholder="Địa chỉ shop"
                        type="text"
                        value={address}
                      />
                    </div>
                    <div className="right-input">
                      <span>Mô tả shop:</span>
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        value={description}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <div className="setting-shop-button">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "rgb(238, 77, 45)",
                    outLine: "none",
                  }}
                  className="mr-2"
                >
                  Lưu
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SettingShop;
