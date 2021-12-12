import React from "react";
import { Link, useHistory } from "react-router-dom";
import { ReactComponent as LoadingThreeDot } from "../../assets/Image/three-dots.svg";
import Loading from "../../components/Loading/Loading";
import { UserContext } from "./../../Context/UserProvider";
import firebase, { auth, db } from "./../../firebase/config";
import { validateEmail } from "./../../utils/validate/Validate";
const LoginUser = () => {
  const history = useHistory();
  const { setUser } = React.useContext(UserContext);
  const { loading, setLoading } = React.useContext(UserContext);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [errEmail, setErrEmail] = React.useState(true);
  const [errPassword, setErrPassword] = React.useState(true);
  const [messageErrEmail, setMessageErrEmail] = React.useState(
    "Vui lòng nhập email hợp lệ"
  );
  const [messageErrPass, setMessageErrPass] = React.useState("");

  const handleLoginEmailAndPassword = async () => {
    setLoading(true);
    const emailResult = validateEmail(email, setErrEmail);
    if (emailResult === false) {
      setLoading(false);
    }
    if (emailResult && password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {})
        .catch((err) => {
          if (err.code == "auth/invalid-email") {
            setMessageErrEmail(err.message);
            setErrEmail(false);
          } else if (err.code == "auth/user-not-found") {
            setMessageErrEmail(err.message);
            setErrEmail(false);
          } else if (err.code == "auth/wrong-password") {
            setMessageErrPass(err.message);
            setErrPassword(false);
          }
          setLoading(false);
        });
    }
  };

  React.useEffect(() => {
    const unSubscibed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { uid } = user;
        let collectionRef = db.collection("users");
        collectionRef.onSnapshot((snapshot) => {
          const documents = snapshot.docs.map((doc) => {
            return {
              ...doc.data(),
              id: doc.id,
            };
          });
          const dataUser = documents.find((item) => {
            if (item.uid === uid && item.role == 0) return item;
          });
          if (dataUser) {
            setUser(dataUser);
            setLoading(false);
            history.push("/user/dashboard");
            return;
          }
          return;
        });
      }
    });

    // clean function
    return () => {
      unSubscibed();
    };
  }, [history]);

  return (
    <div className="login-user">
      {loading ? <Loading Icon={LoadingThreeDot} width={"60px"} /> : ""}
      <div className="left">
        <div className="header-user ">
          <h2 className="animation a1">Chào mừng bạn đến với chúng tôi</h2>
          <h4 className="animation a2">
            Đăng nhập vào tài khoản của bạn bằng email và mật khẩu
          </h4>
        </div>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLoginEmailAndPassword();
          }}
        >
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
            <p style={{ color: "red", fontSize: "14px" }}>{messageErrEmail}</p>
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
            <p style={{ color: "red", fontSize: "14px" }}>
              Vui lòng nhập password hợp lệ
            </p>
          ) : (
            ""
          )}

          <p className="animation a5">
            <Link to="/register-user">Đăng ký tài khoản bán hàng</Link>
          </p>
          <button
            className="animation a6"
            onClick={() => handleLoginEmailAndPassword()}
          >
            Đăng nhập
          </button>
        </form>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default LoginUser;
