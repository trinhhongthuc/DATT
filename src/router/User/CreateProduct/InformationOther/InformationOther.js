import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import React, { useState } from "react";

const InformationOther = ({ informationOther, setInformationOther }) => {
  const [age, setAge] = React.useState("");
  const [checkedAccept, setCheckedAccept] = useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="info-other">
      <Container>
        <div className="row">
          <div className="col-xl-12">
            <div className="info-other-wrapper">
              <h5 className="heading">Thông tin khác</h5>
              <div className="content">
                <ul>
                  <li>
                    <span>Hàng đặt trước</span>
                    <div className="content-wrapper">
                      <div className="content-wrapper-input">
                        <div className="custom-control custom-radio mr-3">
                          <input
                            className="custom-control-input"
                            id="customRadio1"
                            name="custom-radio-1"
                            type="radio"
                            defaultChecked={true}
                            onChange={(e) => {
                              setCheckedAccept(false);
                              setInformationOther({
                                ...informationOther,
                                productBuyNow: "0",
                              });
                            }}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio1"
                          >
                            <span>Không </span>
                          </label>
                        </div>

                        <div className="custom-control custom-radio">
                          <input
                            className="custom-control-input"
                            id="customRadio2"
                            name="custom-radio-1"
                            type="radio"
                            onChange={(e) => setCheckedAccept(true)}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customRadio2"
                          >
                            <span>Đồng Ý</span>
                          </label>
                        </div>
                      </div>

                      {!checkedAccept ? (
                        <p>
                          Tôi sẽ gửi hàng trong 2 ngày (không bao gồm các ngày
                          nghỉ lễ, Tết và những ngày đơn vị vận chuyển không làm
                          việc)
                        </p>
                      ) : (
                        <div className="wrapper-accept">
                          <p>Tôi cần </p>
                          <input
                            type="number"
                            onChange={(e) =>
                              setInformationOther({
                                ...informationOther,
                                productBuyNow: e.target.value,
                              })
                            }
                          />
                          <p>
                            {" "}
                            thời gian chuẩn bị hàng (tối thiểu: 7 ngày - tối đa:
                            15 ngày){" "}
                          </p>
                        </div>
                      )}
                    </div>
                  </li>

                  <li>
                    <label htmlFor="">Tình trạng sản phẩm</label>{" "}
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Tình trạng sản phẩm
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Tình trạng sản phẩm"
                        value={informationOther.statusProduct}
                        onChange={(e) =>
                          setInformationOther({
                            ...informationOther,
                            statusProduct: e.target.value,
                          })
                        }
                      >
                        <MenuItem value={0}>Mới</MenuItem>
                        <MenuItem value={1}>Đã sử dụng</MenuItem>
                      </Select>
                    </FormControl>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InformationOther;
