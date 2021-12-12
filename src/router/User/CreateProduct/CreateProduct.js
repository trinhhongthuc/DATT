import NotificationsIcon from "@material-ui/icons/Notifications";
import Snackbar from "components/Snackbar/Snackbar.js";
import React from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { UserContext } from "./../../../Context/UserProvider";
import { addDocument } from "./../../../firebase/services";
import ChooseImageProduct from "./ChooseImageProduct/ChooseImageProduct";
import ChooseMenu from "./ChooseMenu/ChooseMenu";
import DetailProduct from "./DetailProduct/DetailProduct";
import InformationOther from "./InformationOther/InformationOther";
import InformationProduct from "./InformationProduct/InformationProduct";
import SubmitCreate from "./SubmitCreate/SubmitCreate";
import TransportProduct from "./TransportProduct/TransportProduct";
const CreateProduct = () => {
  const history = useHistory();
  const { user } = React.useContext(UserContext);
  const [notify, setNotify] = React.useState(false);
  const [messageNotify, setMessageNotify] = React.useState("");
  const [chooseMenu, setChooseMenu] = React.useState({
    nameProduct: "",
    idMenu: "",
  });
  const [avatarProduct, setAvatarProduct] = React.useState("");
  const [imgProduct, setImageProduct] = React.useState({
    img1: "",
    img2: "",
    img3: "",
    img4: "",
    img5: "",
  });
  const [description, setDescription] = React.useState("");

  const [detailProduct, setDetailProduct] = React.useState({
    trademark: "",
    origin: "",
    material: "",
    insurance: "",
    typeInsurance: "",
  });

  const [infoBuyProduct, setInfoBuyProduct] = React.useState({
    price: "",
    countProduct: "",
    sale: "",
  });
  const [productKG, setProductKG] = React.useState("");

  const [informationOther, setInformationOther] = React.useState({
    productBuyNow: 0,
    statusProduct: "",
  });

  console.log(user);
  const handleCreateProduct = () => {
    const validateInfoOther = handleErr(7);
    const validateKG = handleErr(6);
    const validateInfo = handleErr(5);
    const validateDetailProduct = handleErr(4);
    const validateImg = handleErr(3);
    const validateMenu = handleErr(2);
    const validateName = handleErr(1);

    if (
      validateName &&
      validateMenu &&
      validateImg &&
      validateDetailProduct &&
      validateInfo &&
      validateKG &&
      validateInfoOther
    ) {
      let imgProductDisplay = [];
      if (imgProduct.img1 !== "") imgProductDisplay.push(imgProduct.img1);
      if (imgProduct.img2 !== "") imgProductDisplay.push(imgProduct.img2);
      if (imgProduct.img3 !== "") imgProductDisplay.push(imgProduct.img3);
      if (imgProduct.img4 !== "") imgProductDisplay.push(imgProduct.img4);
      if (imgProduct.img5 !== "") imgProductDisplay.push(imgProduct.img5);

      addDocument("Products", {
        id: uuidv4(),
        nameProduct: chooseMenu.nameProduct,
        idMenu: chooseMenu.idMenu,
        avatarProduct: avatarProduct,
        imageProduct: imgProductDisplay,
        description: description,
        detailProduct: detailProduct,
        infoBuyProduct: infoBuyProduct,
        productKG: productKG,
        informationOther: informationOther,
        status: 1,
        productBuy: 0,
        rating: 0,
        peopleRating: [],
        idShop: user.uid,
      });
      history.push("/user/dashboard");
    }
  };

  console.log(informationOther);

  const handleErr = (type) => {
    switch (type) {
      case 1:
        let regFirstName = /^[a-zA-Z]+((['. -_][a-zA-Z1-9])?[a-zA-Z1-9]*)*$/;
        if (
          chooseMenu.nameProduct === "" ||
          chooseMenu.nameProduct.length < 6
        ) {
          setMessageNotify("Vui lòng nhập Tên sản phẩm hợp lệ !");
          setNotify(true);
          setTimeout(() => {
            setNotify(false);
            clearTimeout();
          }, 3000);
          return false;
        }
        return true;

      case 2:
        if (chooseMenu.idMenu === "") {
          setMessageNotify("Vui lòng nhập chọn danh mục sản phẩm !");
          setNotify(true);
          setTimeout(() => {
            setNotify(false);
            clearTimeout();
          }, 3000);
          return false;
        }
        return true;

      case 3:
        if (
          avatarProduct === "" ||
          (imgProduct.img1 === "" &&
            imgProduct.img2 === "" &&
            imgProduct.img3 === "" &&
            imgProduct.img4 === "" &&
            imgProduct.img5 === "")
        ) {
          setMessageNotify("Vui lòng nhập thông tin cơ bản !");
          setNotify(true);
          setTimeout(() => {
            setNotify(false);
            clearTimeout();
          }, 3000);
          return false;
        }
        return true;

      case 4:
        if (
          detailProduct.trademark === "" ||
          detailProduct.origin === "" ||
          detailProduct.material === "" ||
          detailProduct.insurance === "" ||
          detailProduct.typeInsurance === ""
        ) {
          setMessageNotify("Vui lòng nhập thông tin chi tiết !");
          setNotify(true);
          setTimeout(() => {
            setNotify(false);
            clearTimeout();
          }, 3000);
          return false;
        }
        return true;

      case 5:
        if (infoBuyProduct.price === "" || infoBuyProduct.countProduct === "") {
          setMessageNotify("Vui lòng nhập thông tin bán hàng !");
          setNotify(true);
          setTimeout(() => {
            setNotify(false);
            clearTimeout();
          }, 3000);
          return false;
        }
        return true;

      case 6:
        if (productKG === "") {
          setMessageNotify("Vui lòng nhập thông tin vận chuyển !");
          setNotify(true);
          setTimeout(() => {
            setNotify(false);
            clearTimeout();
          }, 3000);
          return false;
        }
        return true;

      case 7:
        if (
          informationOther.productBuyNow === "" ||
          informationOther.statusProduct === ""
        ) {
          setMessageNotify("Vui lòng nhập thông tin khác !");
          setNotify(true);
          setTimeout(() => {
            setNotify(false);
            clearTimeout();
          }, 3000);
          return false;
        }
        return true;

      default:
        return false;
    }
  };

  return (
    <div className="create-product">
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

      <ChooseMenu chooseMenu={chooseMenu} setChooseMenu={setChooseMenu} />
      <ChooseImageProduct
        imgProduct={imgProduct}
        setImageProduct={setImageProduct}
        setAvatarProduct={setAvatarProduct}
        avatarProduct={avatarProduct}
        description={description}
        setDescription={setDescription}
      />
      <DetailProduct
        setDetailProduct={setDetailProduct}
        detailProduct={detailProduct}
      />
      <InformationProduct
        setInfoBuyProduct={setInfoBuyProduct}
        infoBuyProduct={infoBuyProduct}
      />
      <TransportProduct setProductKG={setProductKG} productKG={productKG} />
      <InformationOther
        setInformationOther={setInformationOther}
        informationOther={informationOther}
      />
      <SubmitCreate handleCreateProduct={handleCreateProduct} />
    </div>
  );
};

export default CreateProduct;
