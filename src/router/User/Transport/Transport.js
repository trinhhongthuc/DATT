import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { Input, InputGroupAddon, InputGroupText, InputGroup } from "reactstrap";
import SearchIcon from "@mui/icons-material/Search";
import ReactDatetime from "react-datetime";
import DateRangeIcon from "@mui/icons-material/DateRange";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Button from "@mui/material/Button";
import moment from "moment";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import CartImg from "../../../assets/Image/cart.png";
const DataMenuNav = [
  {
    title: "Tất cả",
    type: "tat-ca",
  },
  {
    title: "Chờ xác nhận",
    type: "cho-xac-nhan",
  },
  {
    title: "Chờ lấy hàng",
    type: "cho-lay-hang",
  },
  {
    title: "Đang giao",
    type: "dang-giao",
  },
  {
    title: "Hoàn thành",
    type: "hoan-thanh",
  },
  {
    title: "Hủy đơn",
    type: "huy-don",
  },
];

const FakeDataTable = [
  {
    title: "(CHUYÊN SỈ) KHOÁC DÙ SỌC ULZZANG UNISEX NAM NỮ (KÈM ẢNH THẬT)",
    price: "1000000",
    status: "Active",
  },
  {
    title: "(CHUYÊN SỈ) KHOÁC DÙ SỌC ULZZANG UNISEX NAM NỮ (KÈM ẢNH THẬT)",
    price: "1000000",
    status: "Active",
  },
  {
    title: "(CHUYÊN SỈ) KHOÁC DÙ SỌC ULZZANG UNISEX NAM NỮ (KÈM ẢNH THẬT)",
    price: "1000000",
    status: "Active",
  },
  {
    title: "(CHUYÊN SỈ) KHOÁC DÙ SỌC ULZZANG UNISEX NAM NỮ (KÈM ẢNH THẬT)",
    price: "1000000",
    status: "Active",
  },
  {
    title: "(CHUYÊN SỈ) KHOÁC DÙ SỌC ULZZANG UNISEX NAM NỮ (KÈM ẢNH THẬT)",
    price: "1000000",
    status: "Active",
  },
  {
    title: "(CHUYÊN SỈ) KHOÁC DÙ SỌC ULZZANG UNISEX NAM NỮ (KÈM ẢNH THẬT)",
    price: "1000000",
    status: "Active",
  },
  {
    title: "(CHUYÊN SỈ) KHOÁC DÙ SỌC ULZZANG UNISEX NAM NỮ (KÈM ẢNH THẬT)",
    price: "1000000",
    status: "Active",
  },
];

const RenderTable = () => {
  return (
    <>
      <table>
        <thead>
          {" "}
          <th style={{ width: "40%" }}>Sản phẩm</th>
          <th style={{ width: "13%" }}>Tổng đơn hàng</th>
          <th style={{ width: "13%" }}>Trạng thái</th>
          <th style={{ width: "34%" }}>Thao tác</th>
        </thead>
        <tbody>
          {/* {FakeDataTable.map((item, index) => {
          return (
            <tr>
              <th scope="row">
                <Link to="#">{item.title}</Link>
              </th>
              <th scope="row">
                <NumberFormat
                  value={item.price}
                  className="foo"
                  displayType={"text"}
                  thousandSeparator={true}
                  suffix={"đ"}
                  renderText={(value, props) => <div {...props}>{value}</div>}
                />
              </th>
              <th scope="row">{item.status}</th>
              <th scope="row">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "rgb(238, 77, 45)",
                    outLine: "none",
                  }}
                  className="mr-2"
                >
                  Xác nhận
                </Button>

                <Button variant="contained" color="error">
                  Hủy
                </Button>
              </th>
            </tr>
          );
        })} */}
        </tbody>
      </table>
      <div className="transport-product-empty">
        <img src={CartImg} alt="" />
        <h6>Không tìm thấy đơn hàng</h6>
      </div>
    </>
  );
};

const Transport = () => {
  const [activeClass, setActiveClass] = useState("tat-ca");
  useEffect(() => {
    switch (activeClass) {
      case "cho-xac-nhan":
        setActiveClass("cho-xac-nhan");
        break;
      case "cho-lay-hang":
        setActiveClass("cho-lay-hang");
        break;
      case "dang-giao":
        setActiveClass("dang-giao");
        break;
      case "hoan-thanh":
        setActiveClass("hoan-thanh");
        break;
      case "huy-don":
        setActiveClass("huy-don");
        break;

      default:
        setActiveClass("tat-ca");
        break;
    }
  }, [activeClass]);
  return (
    <div className="transport">
      <Container>
        <div className="transport-wrapper">
          <nav className="nav-top">
            <ul>
              {DataMenuNav &&
                DataMenuNav.length &&
                DataMenuNav.map((item, index) => {
                  return (
                    <li
                      key={index}
                      onClick={(e) => setActiveClass(item.type)}
                      className={activeClass === item.type ? "active" : ""}
                    >
                      {item.title}
                    </li>
                  );
                })}
            </ul>
          </nav>

          <div className="search-transport">
            <div className="search-transport-left">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <SearchIcon />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Search"
                  type="text"
                  // onFocus={(e) => this.setState({ searchFocused: true })}
                  // onBlur={(e) => this.setState({ searchFocused: false })}
                />
              </InputGroup>

              <Button
                variant="contained"
                style={{
                  backgroundColor: "rgb(238, 77, 45)",
                  outLine: "none",
                }}
              >
                Tìm kiếm
              </Button>
            </div>

            <div className="search-transport-right">
              <h6>Ngày đặt hàng</h6>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <CalendarTodayIcon />
                  </InputGroupText>
                </InputGroupAddon>
                <ReactDatetime
                  inputProps={{
                    placeholder: "Start Date",
                  }}
                  //   value={this.state.startDate}
                  timeFormat={false}
                  //   onChange={(e) =>
                  //     this.handleReactDatetimeChange("startDate", e)
                  //   }
                  //   renderDay={(props, currentDate, selectedDate) => {
                  //     let classes = props.className;
                  //     classes += this.getClassNameReactDatetimeDays(currentDate);
                  //     return (
                  //       <td {...props} className={classes}>
                  //         {currentDate.date()}
                  //       </td>
                  //     );
                  //   }}
                />
              </InputGroup>
            </div>
          </div>

          <h2 className="transport-heading">0 Đơn hàng</h2>

          <div className="transport-table">{RenderTable()}</div>
        </div>
      </Container>
    </div>
  );
};

export default Transport;
