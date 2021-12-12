import React from "react";
import { Link, useHistory } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

import { addDocument, generateKeywords } from "../../firebase/services";
// icon
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import { auth } from "../../firebase/config";
import firebase from "../../firebase/config";
import FacebookIcon from "@mui/icons-material/Facebook";

import Loading from "../../components/Loading/Loading";
import { AuthContext } from "../../Context/AuthProvider";
import { ReactComponent as LoadingThreeDot } from "../../assets/Image/three-dots.svg";

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const Login = () => {
  const history = useHistory();
  // state
  const [valueRegister, setValueRegister] = React.useState({
    userName: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [errEmail, setErrEmail] = React.useState(true);
  const [errPassword, setErrPassword] = React.useState(true);
  const [messageErrEmail, setMessageErrEmail] = React.useState(
    "Vui lòng nhập email hợp lệ"
  );
  const [messageErrPass, setMessageErrPass] = React.useState("");
  // context
  const { setUser } = React.useContext(AuthContext);
  // func
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
        phone: "",
        dayOfBirth: "10/10/1980",
        gender: 0,
        address: "",
      });
    }
  };

  const handleLoginEmailAndPassword = async () => {
    setLoading(true);
    firebase
      .auth()
      .signInWithEmailAndPassword(valueRegister.email, valueRegister.password)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => {
        console.log("err", err);
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
  };

  return (
    <div className="login">
      {loading ? <Loading Icon={LoadingThreeDot} width={"60px"} /> : ""}
      <Container className="py-md">
        <Row className="row-grid justify-content-between align-items-center">
          <Col lg={7}>
            <p className="information-title">Chào mừng đến với TMĐT</p>
            <p className="information-login">Vui lòng đăng nhập</p>
          </Col>

          <Col className="mb-lg-auto" lg="5">
            <div className="transform-perspective-right">
              <Card className="bg-secondary shadow border-0">
                <CardHeader className="bg-white pb-5">
                  <div className="text-muted text-center mb-3">
                    <small>Đăng Nhập</small>
                  </div>
                  <div className="btn-wrapper text-center">
                    <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="#pablo"
                      onClick={(e) => handleLogin(fbProvider)}
                    >
                      <span className="btn-inner--icon mr-1">
                        <FacebookIcon />
                      </span>
                      <span className="btn-inner--text">FaceBook</span>
                    </Button>
                    <Button
                      className="btn-neutral btn-icon btn-login-google"
                      color="default"
                      href="#pablo"
                      onClick={(e) => handleLogin(googleProvider)}
                    >
                      <span className="btn-inner--icon mr-1">
                        <GoogleIcon />
                      </span>
                      <span className="btn-inner--text">Google</span>
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="px-lg-5 py-lg-3">
                  <div className="text-center text-muted mb-4">
                    <small>Hoặc</small>
                  </div>
                  <Form
                    role="form"
                    onSubmit={() => handleLoginEmailAndPassword()}
                  >
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <EmailIcon />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="email"
                          onChange={(e) =>
                            setValueRegister((pre) => {
                              return {
                                ...pre,
                                email: e.target.value,
                              };
                            })
                          }
                        />
                      </InputGroup>
                      {!errEmail ? (
                        <p
                          style={{
                            color: "red",
                            fontSize: "14px",
                            margin: "0",
                          }}
                        >
                          {messageErrEmail}
                        </p>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <LockIcon />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Password"
                          type="password"
                          autoComplete="off"
                          onChange={(e) =>
                            setValueRegister((pre) => {
                              return {
                                ...pre,
                                password: e.target.value,
                              };
                            })
                          }
                        />
                      </InputGroup>
                      {!errPassword ? (
                        <p
                          style={{
                            color: "red",
                            fontSize: "14px",
                            margin: "0",
                          }}
                        >
                          {messageErrPass}
                        </p>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                    <div className="custom-control custom-control-alternative custom-checkbox">
                      <input
                        className="custom-control-input"
                        id="customCheckLogin2"
                        type="checkbox"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheckLogin2"
                      >
                        <span>Remember me</span>
                      </label>
                    </div>
                    <div
                      className="text-center"
                      onClick={() => handleLoginEmailAndPassword()}
                    >
                      <Button className="my-4" color="warning" type="button">
                        Login
                      </Button>
                    </div>
                  </Form>
                </CardBody>
              </Card>
              <Row className="mt-3">
                <Col xs="6">
                  <a
                    className="text-light"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <small>Forgot password?</small>
                  </a>
                </Col>
                <Col className="text-right" xs="6">
                  <Link to="/register" className="text-light">
                    <small>Create new account</small>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
