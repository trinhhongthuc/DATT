import AddIcon from "@mui/icons-material/Add";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { db } from "firebase/config";
import React, { useEffect, useState } from "react";
import ReactDatetime from "react-datetime";
import NumberFormat from "react-number-format";
import { Link } from "react-router-dom";
import { Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import CartImg from "../../../assets/Image/cart.png";
import ProductImg from "../../../assets/Image/product/prd1.jfif";
import { UserContext } from "./../../../Context/UserProvider";
import { listStatus } from "./../../../utils/contant/Contants";
const DataMenuNav = [
  {
    title: "Tất cả",
    type: "tat-ca",
  },
  {
    title: "Đang hoạt động",
    type: "dang-hoat-dong",
  },
  {
    title: "Hết hàng",
    type: "het-hang",
  },
  {
    title: "Đã ẩn",
    type: "da-an",
  },
];
const FakeDataTable = [
  {
    title:
      "(CHUYÊN SỈ) KHOÁC DÙ SỌC ULZZANG UNISEX NAM NỮ (KÈM ẢNH THẬT) (CHUYÊN SỈ) KHOÁC DÙ SỌC ULZZANG UNISEX NAM NỮ (KÈM ẢNH THẬT) (CHUYÊN SỈ) KHOÁC DÙ SỌC ULZZANG UNISEX NAM NỮ (KÈM ẢNH THẬT)",
    img: ProductImg,
    type: "điện thoại",
    price: "1000000",
    store: "100",
    productBuy: "12",
    status: "active",
  },
];

const RenderTable = (checkedAll, products, menu) => {
  //get product

  return (
    <>
      <table>
        <thead>
          {" "}
          <th style={{ width: "4%" }}></th>
          <th style={{ width: "31%" }}>Tên sản phẩm</th>
          <th style={{ width: "10%" }}>Trạng thái</th>
          <th style={{ width: "11%" }}>Phân loại</th>
          <th style={{ width: "11%" }}>Giá</th>
          <th style={{ width: "10%" }}>Kho hàng</th>
          <th style={{ width: "8%" }}>Đã bán</th>
          <th style={{ width: "17%" }}>Sửa thông tin</th>
        </thead>
        <tbody>
          {products?.length > 0 &&
            products.map((item, index) => {
              const type = menu.find(
                (itemMenu) => itemMenu.menuId == item.idMenu
              );
              const status = listStatus.find(
                (itemStatus) => itemStatus.type == item.status
              );

              return (
                <tr key={item.id}>
                  <th scope="row">
                    <div className="custom-control custom-checkbox">
                      <input
                        className="custom-control-input"
                        id={`customCheck1${index}`}
                        type="checkbox"
                        checked={checkedAll ? true : ""}
                        disabled={checkedAll ? false : true}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor={`customCheck1${index}`}
                      ></label>
                    </div>
                  </th>
                  <th scope="row">
                    <Link to={`/user/manage-product/update-product/${item.id}`}>
                      <img
                        src={item.avatarProduct}
                        alt=""
                        style={{ paddingRight: "6px" }}
                      />
                      <span>
                        {item?.nameProduct.length > 60
                          ? item.nameProduct.slice(0, 60) + "..."
                          : item.nameProduct}
                      </span>
                    </Link>
                  </th>
                  <th scope="row">{status.status}</th>
                  <th scope="row">{type.nameMenu}</th>
                  <th scope="row">
                    <NumberFormat
                      value={item.infoBuyProduct.price}
                      className="foo"
                      displayType={"text"}
                      thousandSeparator={true}
                      suffix={"đ"}
                      renderText={(value, props) => (
                        <div {...props}>{value}</div>
                      )}
                    />
                  </th>
                  <th scope="row">
                    {item.infoBuyProduct.countProduct - item.productBuy}
                  </th>
                  <th scope="row">{item.productBuy}</th>
                  <th scope="row" className="wrapper-button-action">
                    <Link to={`/user/manage-product/update-product/${item.id}`}>
                      <Button
                        variant="contained"
                        style={{
                          backgroundColor: "rgb(238, 77, 45)",
                          outLine: "none",
                        }}
                        className="mr-2"
                      >
                        Sửa
                      </Button>
                    </Link>

                    <Button
                      variant="contained"
                      color="error"
                      disabled={checkedAll ? true : false}
                    >
                      Xóa
                    </Button>
                  </th>
                </tr>
              );
            })}
        </tbody>
      </table>

      {products?.length === 0 ? (
        <div className="manager-product-empty">
          <img src={CartImg} alt="" />
          <h6>Không tìm thấy sản phẩm nào</h6>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

const ManagerProduct = () => {
  const [activeClass, setActiveClass] = useState("tat-ca");
  const [checkedAll, setCheckedAll] = useState(false);
  const [products, setProducts] = useState([]);

  const { menu } = React.useContext(UserContext);

  useEffect(() => {
    switch (activeClass) {
      case "dang-hoat-dong":
        setActiveClass("dang-hoat-dong");
        break;
      case "het-hang":
        setActiveClass("het-hang");
        break;
      case "da-an":
        setActiveClass("da-an");
        break;
      default:
        setActiveClass("tat-ca");
        break;
    }
  }, [activeClass]);

  // get product
  const { user } = React.useContext(UserContext);

  React.useEffect(() => {
    if (user.uid) {
      db.collection("Products")
        .where("idShop", "==", user.uid)
        .limit(20)
        .get()
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
          }));
          setProducts(data);
        });
    }
  }, [user]);

  return (
    <div className="manager-product">
      <Container>
        <div className="manager-product-wrapper">
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

          <div className="manager-product-search">
            <div className="manager-product-search-left">
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

            <div className="manager-product-search-right">
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
          <div className="manager-product-create">
            <h2>1 sản phẩm</h2>

            <Button
              variant="contained"
              style={{
                backgroundColor: "rgb(238, 77, 45)",
                outLine: "none",
              }}
            >
              <Link to="/user/manage-product/create-product">
                {" "}
                <AddIcon />
                Thêm sản phẩm mới
              </Link>
            </Button>
          </div>

          <div className="manager-product-table">
            {RenderTable(checkedAll, products, menu)}
          </div>

          <div className="manager-product-action">
            <div className="manager-product-action-left">
              <div className="custom-control custom-checkbox">
                <input
                  className="custom-control-input"
                  id="customCheck1"
                  type="checkbox"
                  onChange={(e) => setCheckedAll(!checkedAll)}
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  <span>Chọn tất cả</span>
                </label>
              </div>
            </div>

            <div className="manager-product-action-right">
              <p>1 sản phẩm đã được chọn</p>

              <Button
                variant="contained"
                style={{
                  backgroundColor: "rgb(238, 77, 45)",
                  outLine: "none",
                }}
              >
                Xóa
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ManagerProduct;
