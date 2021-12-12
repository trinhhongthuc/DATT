import NotificationsIcon from "@material-ui/icons/Notifications";
import Snackbar from "components/Snackbar/Snackbar.js";
import { db } from "firebase/config";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { ReactComponent as LoadingThreeDot } from "../../../assets/Image/three-dots.svg";
import Loading from "../../../components/Loading/Loading";
import { UserContext } from "../../../Context/UserProvider";
import ChooseImageProduct from "./ChooseImageProduct/ChooseImageProduct";
import ChooseMenu from "./ChooseMenu/ChooseMenu";
import DetailProduct from "./DetailProduct/DetailProduct";
import InformationOther from "./InformationOther/InformationOther";
import InformationProduct from "./InformationProduct/InformationProduct";
import SubmitCreate from "./SubmitCreate/SubmitCreate";
import TransportProduct from "./TransportProduct/TransportProduct";
const UpdateProduct = () => {
  const history = useHistory();
  const id = useParams().id;
  const [loading, setLoading] = React.useState(true);
  const [idDoc, setIdDoc] = React.useState("");
  // state
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

  // get product by id

  React.useEffect(() => {
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
            console.log(data[0]);
            const res = data[0];
            setChooseMenu({
              nameProduct: res.nameProduct,
              idMenu: res.idMenu,
            });
            setAvatarProduct(res.avatarProduct);
            setImageProduct({
              img1: res.imageProduct[0],
              img2: res.imageProduct[1],
              img3: res.imageProduct[2],
              img4: res.imageProduct[3],
              img5: res.imageProduct[4],
            });

            setDescription(res.description);
            setDetailProduct(res.detailProduct);
            setInfoBuyProduct(res.infoBuyProduct);
            setProductKG(res.productKG);
            setInformationOther(res.informationOther);
            setLoading(false);
            setIdDoc(res.idDoc);
            setLoading(false);
          }
        });
    }
  }, [id]);

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
      const roomRef = db.collection("Products").doc(idDoc);
      let imgProductDisplay = [];
      if (!!imgProduct.img1 && imgProduct.img1 !== "")
        imgProductDisplay.push(imgProduct.img1);
      if (!!imgProduct.img2 && imgProduct.img2 !== "")
        imgProductDisplay.push(imgProduct.img2);
      if (!!imgProduct.img3 && imgProduct.img3 !== "")
        imgProductDisplay.push(imgProduct.img3);
      if (!!imgProduct.img4 && imgProduct.img4 !== "")
        imgProductDisplay.push(imgProduct.img4);
      if (!!imgProduct.img5 && imgProduct.img5 !== "")
        imgProductDisplay.push(imgProduct.img5);

      roomRef.update({
        nameProduct: chooseMenu.nameProduct,
        idMenu: chooseMenu.idMenu,
        avatarProduct: avatarProduct,
        imageProduct: imgProductDisplay,
        description: description,
        detailProduct: detailProduct,
        infoBuyProduct: infoBuyProduct,
        productKG: productKG,
        informationOther: informationOther,
      });
      history.push("/user/manage-product");
    }
  };

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
      {loading ? <Loading Icon={LoadingThreeDot} width={"60px"} /> : ""}
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

export default UpdateProduct;
