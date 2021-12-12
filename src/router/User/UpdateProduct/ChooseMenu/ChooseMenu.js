import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import SearchIcon from "@mui/icons-material/Search";
import Container from "@mui/material/Container";
import React from "react";
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import { UserContext } from "../../../../Context/UserProvider";
const ChooseMenu = ({ setChooseMenu, chooseMenu }) => {
  const { menu } = React.useContext(UserContext);

  const [menuid, setmenuid] = React.useState("");
  return (
    <div className="choose-menu">
      <Container>
        <div className="row">
          <div className="col-xl-12">
            <div className="choose-menu-wrapper">
              <div className="choose-menu-wrapper-heading">
                <h2 className="heading">Thêm 1 sản phẩm mới</h2>
                <p>Vui lòng chọn ngành hàng phù hợp cho sản phẩm của bạn.</p>
              </div>

              <div className="choose-menu-wrapper-name-product">
                <span>Tên sản phẩm:</span>
                <Input
                  placeholder="Tên sản phẩm"
                  type="text"
                  value={chooseMenu.nameProduct}
                  onChange={(e) => {
                    setChooseMenu({
                      ...chooseMenu,
                      nameProduct: e.target.value,
                    });
                  }}
                />
              </div>

              <div className="choose-menu-wrapper-content">
                <div className="search">
                  <div className="search-input">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <SearchIcon />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Tên ngành hàng"
                        type="text"
                        // onFocus={(e) => this.setState({ searchFocused: true })}
                        // onBlur={(e) => this.setState({ searchFocused: false })}
                      />
                    </InputGroup>
                  </div>
                  <p>Chọn ngành hàng chính xác</p>
                </div>

                <div className="menu-choose">
                  <ul>
                    {menu?.length > 0
                      ? menu.map((item) => {
                          return (
                            <li
                              key={item.menuId}
                              className={
                                chooseMenu.idMenu == item.menuId
                                  ? "active-menu"
                                  : ""
                              }
                              onClick={(e) => {
                                setChooseMenu({
                                  ...chooseMenu,
                                  idMenu: item.menuId,
                                });
                              }}
                            >
                              <ArrowForwardIosIcon />
                              {item.nameMenu}{" "}
                            </li>
                          );
                        })
                      : ""}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChooseMenu;
