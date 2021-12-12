import React from "react";
import { Link, useHistory } from "react-router-dom";
import avatar from "../../assets/Image/avatar-default.svg";
import { ReactComponent as LoadingThreeDot } from "../../assets/Image/three-dots.svg";
import Loading from "../../components/Loading/Loading";
import { UserContext } from "./../../Context/UserProvider";
import firebase from "./../../firebase/config";
import { addDocument } from "./../../firebase/services";
import { validateEmail } from "./../../utils/validate/Validate";

const RegisterShop = () => {
  const history = useHistory();
  const { loading, setLoading } = React.useContext(UserContext);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [nameShop, setNameShop] = React.useState("");

  const [errEmail, setErrEmail] = React.useState(true);
  const [errPassword, setErrPassword] = React.useState(true);
  const [messageErrEmail, setMessageErrEmail] = React.useState(
    "Vui lòng nhập email hợp lệ"
  );
  const [errAddress, setErrAddress] = React.useState(true);
  const [errNameShop, setErrNameShop] = React.useState(true);

  const validateEmpty = (value, setValue) => {
    if (value == "" || value?.length < 2) {
      setValue(false);
      return false;
    } else {
      setValue(true);
      return true;
    }
  };

  const handleRegisterEmailAndPassword = () => {
    const valueNameShop = validateEmpty(nameShop, setErrNameShop);
    const valueAddress = validateEmpty(address, setErrAddress);
    const resultEmail = validateEmail(email, setErrEmail);
    if (valueNameShop && valueAddress && password?.length >= 6 && resultEmail) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          if (res.additionalUserInfo?.isNewUser) {
            addDocument("users", {
              displayName: nameShop,
              email: email,
              photoURL: avatar,
              uid: res.user.uid,
              providerId: res.additionalUserInfo.providerId,
              phone: "",
              dayOfBirth: "10/10/1980",
              gender: 0,
              address: "",
              role: 1,
            });
            history.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
          if (err) setErrEmail(false);
          setMessageErrEmail(err.message);
          setLoading(false);
        });
    }
  };

  return (
    <div className="register-user">
      {loading ? <Loading Icon={LoadingThreeDot} width={"60px"} /> : ""}
      <div className="left">
        <div className="header-user ">
          <h2 className="animation a1">Chào mừng bạn đến với chúng tôi</h2>
          <h4 className="animation a2">
            Đăng ký tài khoản bán hàng để được trải nghiệm những điều tuyệt nhất
            của chúng tôi
          </h4>
        </div>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleRegisterEmailAndPassword();
          }}
        >
          <input
            type="text"
            className="form-field animation a4"
            placeholder="Tên shop"
            value={nameShop}
            onChange={(e) => {
              setNameShop(e.target.value);
              setErrPassword(true);
            }}
          />
          {!errNameShop ? (
            <p style={{ color: "red", fontSize: "14px", margin: 0 }}>
              Vui lòng nhập địa chỉ hợp lệ
            </p>
          ) : (
            ""
          )}
          <input
            type="email"
            className="form-field animation a3"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrEmail(true);
            }}
          />
          {!errEmail ? (
            <p style={{ color: "red", fontSize: "14px", margin: 0 }}>
              {messageErrEmail}
            </p>
          ) : (
            ""
          )}
          <input
            type="password"
            className="form-field animation a4"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrPassword(true);
            }}
          />
          {!errPassword ? (
            <p style={{ color: "red", fontSize: "14px", margin: 0 }}>
              Vui lòng nhập password hợp lệ
            </p>
          ) : (
            ""
          )}

          <input
            type="text"
            className="form-field animation a4"
            placeholder="Địa chỉ shop"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setErrPassword(true);
            }}
          />

          {!errAddress ? (
            <p style={{ color: "red", fontSize: "14px", margin: 0 }}>
              Vui lòng nhập địa chỉ hợp lệ
            </p>
          ) : (
            ""
          )}

          <p className="animation a5">
            <Link to="#">Forgot Password</Link>
          </p>
          <button
            className="animation a6"
            onClick={() => handleRegisterEmailAndPassword()}
          >
            Đăng nhập
          </button>
        </form>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default RegisterShop;
