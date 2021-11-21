import React from "react";
import Container from "@mui/material/Container";
import { Input, InputGroupAddon, InputGroupText, InputGroup } from "reactstrap";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const ChooseMenu = () => {
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
                <Input placeholder="Tên sản phẩm" type="text" />
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
                    <li>
                      Máy tính & laptop <KeyboardArrowRightIcon />
                    </li>
                    <li>
                      Máy tính & laptop <KeyboardArrowRightIcon />
                    </li>
                    <li>
                      Máy tính & laptop <KeyboardArrowRightIcon />
                    </li>
                    <li>
                      Máy tính & laptop <KeyboardArrowRightIcon />
                    </li>
                    <li>
                      Máy tính & laptop <KeyboardArrowRightIcon />
                    </li>
                    <li>
                      Máy tính & laptop <KeyboardArrowRightIcon />
                    </li>
                    <li>
                      Máy tính & laptop <KeyboardArrowRightIcon />
                    </li>
                    <li>
                      Máy tính & laptop <KeyboardArrowRightIcon />
                    </li>
                    <li>
                      Máy tính & laptop <KeyboardArrowRightIcon />
                    </li>
                  </ul>
                  <ul>
                    <li>
                      Máy tính & laptop <KeyboardArrowRightIcon />
                    </li>
                    <li>
                      Máy tính & laptop <KeyboardArrowRightIcon />
                    </li>
                    <li>
                      Máy tính & laptop <KeyboardArrowRightIcon />
                    </li>
                    <li>
                      Máy tính & laptop <KeyboardArrowRightIcon />
                    </li>
                    <li>
                      Máy tính & laptop <KeyboardArrowRightIcon />
                    </li>
                    <li>
                      Máy tính & laptop <KeyboardArrowRightIcon />
                    </li>
                    <li>
                      Máy tính & laptop <KeyboardArrowRightIcon />
                    </li>
                    <li>
                      Máy tính & laptop <KeyboardArrowRightIcon />
                    </li>
                    <li>
                      Máy tính & laptop <KeyboardArrowRightIcon />
                    </li>
                  </ul>
                  <ul>
                    <li>Máy tính & laptop</li>
                    <li>Máy tính & laptop</li>
                    <li>Máy tính & laptop</li>
                    <li>Máy tính & laptop</li>
                    <li>Máy tính & laptop</li>
                    <li>Máy tính & laptop</li>
                    <li>Máy tính & laptop</li>
                    <li>Máy tính & laptop</li>
                    <li>Máy tính & laptop</li>
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
