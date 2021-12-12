import NotificationsIcon from "@material-ui/icons/Notifications";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory";
import Container from "@mui/material/Container";
import Rating from "@mui/material/Rating";
import Snackbar from "components/Snackbar/Snackbar.js";
import { db } from "firebase/config";
import moment from "moment";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import { Button } from "reactstrap";
import { ReactComponent as FreeShip } from "../../assets/Image/ship.svg";
import { ReactComponent as LoadingThreeDot } from "../../assets/Image/three-dots.svg";
import Loading from "../../components/Loading/Loading";
import { AppContext } from "./../../Context/AppProvider";
import { AuthContext } from "./../../Context/AuthProvider";
const DetailProduct = () => {
  const id = useParams().id;

  // context
  const { setCart, cart, menu } = React.useContext(AppContext);
  const { user } = React.useContext(AuthContext);

  //
  const [arrSlideProduct, setArrSlideProduct] = React.useState([]);
  const [setting, setSetting] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [product, setProduct] = React.useState("");
  const [shop, setShop] = React.useState("");
  const [peopleCountProduct, setPeopleCountProduct] = React.useState(1);
  const [notify, setNotify] = React.useState(false);
  const [messageNotify, setMessageNotify] = React.useState("");
  const [productRelations, setProductRelations] = React.useState([]);
  const [menuProductDisplay, setMenuProductDisplay] = React.useState("");
  const [disabledEventRating, setDisabledEventRating] = React.useState(false);
  const [valueRating, setValueRating] = React.useState(0);
  const settings2 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // get product buy id
  React.useEffect(() => {
    setLoading(true);
    if (id) {
      db.collection("Products")
        .where("id", "==", id)
        .get()
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            idDoc: doc.id,
          }));
          if (data) {
            setProduct(data[0]);
            setArrSlideProduct(data[0]);

            setSetting({
              customPaging: function (i) {
                return (
                  <Link to={"#"}>
                    <img src={data[0].imageProduct[i]} alt="slide1" />
                  </Link>
                );
              },
              dots: true,
              dotsClass: "slick-dots slick-thumb",
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
            });

            setValueRating(data[0].rating);

            const menuProduct = menu.find(
              (item) => item.menuId === data[0].idMenu
            );
            setMenuProductDisplay(menuProduct);

            const emptyPeopleRating = data[0].peopleRating.find(
              (item) => item === user.uid
            );
            if (emptyPeopleRating) setDisabledEventRating(true);

            setLoading(false);
          }
        });
    }
  }, [id]);

  React.useEffect(() => {
    setLoading(true);
    if (product.idShop) {
      db.collection("users")
        .where("uid", "==", product.idShop)
        .get()
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            idDoc: doc.id,
          }));
          if (data) {
            setShop(data[0]);
            setLoading(false);
          }
        });
    }
  }, [product]);

  React.useEffect(() => {
    setLoading(true);
    if (product.idMenu) {
      db.collection("Products")
        .where("idMenu", "==", product.idMenu)
        .where("status", "==", 0)
        .where("id", "!=", product.id)
        .limit(20)
        .get()
        .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            idDoc: doc.id,
          }));
          if (data) {
            setProductRelations(data);
          }
        });
    }
  }, [product]);

  const handleAddProductCart = (id) => {
    const validateData = cart.find((item) => item.product.id === id);
    console.log(validateData);
    console.log(id);
    if (validateData) {
      setMessageNotify("Sản phẩm đã tồn tại trong giỏ hàng !");
      setNotify(true);
      setTimeout(() => {
        setNotify(false);
        clearTimeout();
      }, 3000);
    } else {
      setCart([
        ...cart,
        {
          product: product,
          countProduct: peopleCountProduct,
        },
      ]);

      setMessageNotify("Thêm sản phẩm vào giỏ hàng thành công !");
      setNotify(true);
      setTimeout(() => {
        setNotify(false);
        clearTimeout();
      }, 3000);
    }
  };

  const handleRating = (product, newValue) => {
    const updateRating = db.collection("Products").doc(product.idDoc);
    setValueRating(Number(product.rating) + Number(newValue));
    updateRating.update({
      peopleRating: [...product.peopleRating, user.uid],
      rating: Number(product.rating) + Number(newValue),
    });
    setDisabledEventRating(true);
  };
  return (
    <div className="detail-product">
      {notify ? (
        <Snackbar
          place="tc"
          color="primary"
          icon={NotificationsIcon}
          message={messageNotify}
          open={notify}
          closeNotification={() => setNotify(false)}
          close
        />
      ) : (
        ""
      )}

      {loading ? (
        <Loading Icon={LoadingThreeDot} width={"60px"} background="#fff" />
      ) : (
        ""
      )}
      <Container>
        <div className="row">
          <div className="product-detail-wrapper-top">
            <div className="product-detail-wrapper-top-left">
              <Slider {...setting}>
                {product.imageProduct?.length > 0 &&
                  product.imageProduct.map((item, index) => {
                    return (
                      <div
                        className="product-detail-wrapper-top-left-img"
                        key={index}
                      >
                        <img src={item} alt="slide1" />
                      </div>
                    );
                  })}
              </Slider>
            </div>
            <div className="product-detail-wrapper-top-right">
              <h3 className="product-detail-wrapper-top-right-title">
                {product.nameProduct}
              </h3>
              <div className="product-detail-wrapper-top-right-rating">
                <div className="product-detail-wrapper-top-right-rating-value">
                  <Rating
                    name="simple-controlled"
                    value={product.rating}
                    style={{
                      pointerEvents: "none",
                    }}
                  />
                </div>
                <p className="product-detail-wrapper-top-right-rating-number">
                  {product.peopleRating} <span>Đánh giá</span>
                </p>
                <p className="product-detail-wrapper-top-right-rating-productbuy">
                  {product.productBuy} <span>Đã bán</span>
                </p>
              </div>
              {product.infoBuyProduct && product.infoBuyProduct.sale > 0 ? (
                <div className="product-detail-wrapper-top-right-price">
                  <p className="product-detail-wrapper-top-right-price-old">
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "VND",
                    }).format(
                      product.infoBuyProduct && product.infoBuyProduct.price
                    )}
                  </p>
                  <p className="product-detail-wrapper-top-right-price-new">
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "VND",
                    }).format(
                      product.infoBuyProduct.price -
                        product.infoBuyProduct.price /
                          product.infoBuyProduct.sale
                    )}
                  </p>
                </div>
              ) : (
                <div className="product-detail-wrapper-top-right-price">
                  <p className="product-detail-wrapper-top-right-price-new">
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "VND",
                    }).format(
                      product.infoBuyProduct && product.infoBuyProduct.price
                    )}
                  </p>
                </div>
              )}

              <div className="product-detail-wrapper-top-right-ship">
                <h6 className="product-detail-wrapper-top-right-ship-title">
                  Vận Chuyển
                </h6>
                <p
                  className="product-detail-wrapper-top-right-ship-text"
                  style={{ marginRight: 6 }}
                >
                  <FreeShip /> <span>Miễn phí vận chuyển</span>
                </p>
                <p className="product-detail-wrapper-top-right-ship-price">
                  <span className="product-detail-wrapper-top-right-ship-price-number">
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "VND",
                    }).format(Number(product.productKG) * 30000)}
                  </span>
                </p>
              </div>

              <div className="product-detail-wrapper-top-right-choose-number">
                <h6 className="product-detail-wrapper-top-right-choose-number-title">
                  Số lượng
                </h6>
                <div className="number-choose-buy">
                  <span
                    onClick={() => {
                      if (peopleCountProduct > 1)
                        setPeopleCountProduct(peopleCountProduct - 1);
                    }}
                    style={{ userSelect: "none" }}
                  >
                    -
                  </span>
                  <span>{peopleCountProduct}</span>
                  <span
                    onClick={() => {
                      if (
                        peopleCountProduct <
                        (!!product && product.infoBuyProduct.countProduct) -
                          (!!product && product.productBuy)
                      )
                        setPeopleCountProduct(peopleCountProduct + 1);
                    }}
                    style={{ userSelect: "none" }}
                  >
                    +
                  </span>
                </div>
                <div className="number-product-buy">
                  {(!!product && product.infoBuyProduct.countProduct) -
                    (!!product && product.productBuy)}{" "}
                  sản phẩm có sẳn
                </div>
              </div>
              <div className="product-detail-wrapper-top-right-button">
                <Button
                  className="btn-1 ml-1"
                  color="warning"
                  outline
                  type="button"
                  onClick={() => handleAddProductCart(product.id)}
                >
                  <AddShoppingCartIcon />
                  Thêm vào giỏ hàng
                </Button>
                <Button className="btn-1 ml-1" color="warning" type="button">
                  Mua ngay
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="page-product-shop">
            <div className="page-product-shop-left">
              <div className="page-product-shop-left-wrapper">
                <div className="page-product-shop-left-wrapper-avatar">
                  <img src={!!shop && shop.photoURL} alt="slide5" />
                </div>
                <div className="page-product-shop-left-wrapper-description">
                  <h5>{!!shop && shop.displayName}</h5>
                  <p>Online 17 Phút Trước</p>
                  <div className="description-wrapper">
                    <div className="description-chat">
                      <ChatBubbleIcon />
                      Chát ngay
                    </div>
                    <div className="description-shop">
                      <StoreMallDirectoryIcon />
                      Xem shop
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page-product-shop-right">
              <ul>
                <li>
                  <span>Đánh giá</span>
                  19
                </li>
                <li>
                  <span>Tý lệ phản hồi</span>
                  19%
                </li>
                <li>
                  <span>Tham gia</span>
                  {moment(
                    new Date(!!shop && shop.createdAt?.seconds * 1000)
                  ).fromNow()}{" "}
                </li>
                <li>
                  <span>Sản phẩm</span>
                  19
                </li>
                <li>
                  <span>Người theo dõi</span>
                  19
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="row "
          style={{ background: "#fff", padding: "12px 0", marginTop: "25px" }}
        >
          <h3
            style={{
              background: "#fff",
              color: "rgba(0,0,0,0.8)",
              fontSize: "18px",
              FontWeight: "500",
              padding: " 0 12px 12px 12px",
              marginBottom: "12px",
              borderBottom: "0.5px solid rgba(0,0,0,.09)",
              width: "100%",
            }}
          >
            Sản phẩm liên quan
          </h3>
          <Slider {...settings2} style={{ width: "100%" }}>
            {!!productRelations &&
              productRelations?.length > 0 &&
              productRelations.map((item) => {
                return (
                  <div className="detail-product-relate">
                    <Link to={`/product/${item.id}`} className="box-product">
                      {item.sale > 0 && (
                        <div className="box-product-sales">
                          <p className="box-product-sales-number">
                            {item.sale}
                          </p>
                          <p className="box-product-sales-text">Giảm</p>
                        </div>
                      )}

                      <div className="box-product-love">
                        <div className="box-product-love-wrapper">
                          <span>Yêu thích</span>
                        </div>
                      </div>

                      <div className="box-product-img">
                        <img src={item.avatarProduct} alt="" />
                      </div>
                      <div className="box-product-bottom">
                        <p className="box-product-bottom-description">
                          {item.nameProduct.length > 45
                            ? item.nameProduct.slice(0, 45) + "..."
                            : item.nameProduct}
                        </p>

                        <div className="box-product-bottom-price">
                          <p className="box-product-bottom-price-old">
                            {" "}
                            {new Intl.NumberFormat("de-DE", {
                              style: "currency",
                              currency: "VND",
                            }).format(item.infoBuyProduct.price)}
                          </p>
                          {/* <p>-</p>
            <p className="box-product-bottom-price-now">30.000</p> */}

                          <div className="free-ship">
                            <FreeShip />
                          </div>
                        </div>

                        <div className="box-product-bottom-evaluate">
                          <div className="box-product-bottom-evaluate-rate">
                            <Rating
                              name="simple-controlled"
                              value={item.rating}
                              style={{ pointerEvents: "none" }}
                            />
                          </div>
                          <div className="box-product-bottom-evaluate-buy">
                            Đã bán {item.productBuy}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </Slider>
        </div>

        <div
          className="row"
          style={{ background: "#fff", padding: "25px", marginTop: "25px" }}
        >
          <h3 className="detail-product__heading">CHI TIẾT SẢN PHẨM</h3>
          <div className="detail-product-feedback">
            <ul className="information-detail-product">
              <li>
                <h6>Danh mục</h6>
                <p>{!!menuProductDisplay && menuProductDisplay.nameMenu}</p>
              </li>
              <li>
                <h6>Thương hiệu</h6>
                <p>{!!product && product.detailProduct.trademark}</p>
              </li>
              <li>
                <h6>Xuất xứ</h6>
                <p>{!!product && product.detailProduct.origin}</p>
              </li>
              <li>
                <h6>Chất liệu</h6>
                <p>{!!product && product.detailProduct.material}</p>
              </li>
              <li>
                <h6>Hạn bảo hành</h6>
                <p>{!!product && product.detailProduct.insurance}</p>
              </li>
              <li>
                <h6>Loại Bảo hành</h6>
                <p>{!!product && product.detailProduct.typeInsurance}</p>
              </li>

              <li>
                <h6>Trọng lượng</h6>
                <p>{!!product && product.productKG} kg</p>
              </li>

              <li>
                <h6>Kho</h6>
                <p>
                  {Number(!!product && product.infoBuyProduct.countProduct) -
                    Number(!!product && product.productBuy)}{" "}
                  kg
                </p>
              </li>
              <li>
                <h6>Gửi từ</h6>
                <p>{!!shop && shop.address}</p>
              </li>
            </ul>
          </div>

          <h3 className="detail-product__heading">MÔ TẢ SẢN PHẨM</h3>
          <div className="detail-product-feedback">
            <p className="information-note">{product.description} </p>
          </div>

          <h3 className="detail-product__heading">ĐÁNH GIÁ SẢN PHẨM</h3>
          <div className="detail-product-feedback">
            <div className="detail-product-feedback-rating">
              <div className="detail-product-feedback-rating-title">
                <span>
                  {!!valueRating && valueRating == 0
                    ? "0"
                    : Number(valueRating) /
                      (!!product && product.peopleRating.length == 0
                        ? 1
                        : !!product && product.peopleRating.length)}
                </span>
                trên 5
              </div>

              <div className="detail-product-feedback-rating-stars">
                <Rating
                  name="simple-controlled"
                  value={!!valueRating && valueRating}
                  style={{ pointerEvents: disabledEventRating ? "none" : "" }}
                  onChange={(e, newValue) => handleRating(product, newValue)}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailProduct;
