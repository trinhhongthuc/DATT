import EmailIcon from "@mui/icons-material/Email";
import GroupIcon from "@mui/icons-material/Group";
// icon
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";
// img tu foler img
import avatar from "../../assets/Image/avatar-default.svg";
import { ReactComponent as LoadingThreeDot } from "../../assets/Image/three-dots.svg";
import Loading from "../../components/Loading/Loading";
import { AuthContext } from "../../Context/AuthProvider";
import firebase from "../../firebase/config";
import {
  validateEmail,
  validateNumber,
  validateText,
} from "../../utils/validate/Validate";
import { addDocument } from "./../../firebase/services";

// code
const Register = () => {
  const history = useHistory();
  // context
  const { setUser } = React.useContext(AuthContext);
  // state local
  const [valueRegister, setValueRegister] = React.useState({
    userName: "",
    email: "",
    password: "",
    rePassword: "",
    phone: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [errUserName, setErrUserName] = React.useState(true);
  const [errEmail, setErrEmail] = React.useState(true);
  const [errPhone, setErrPhone] = React.useState(true);
  const [errPassword, setErrPassword] = React.useState(true);
  const [errRePassword, setErrRePassword] = React.useState(true);
  const [messageErrEmail, setMessageErrEmail] = React.useState(
    "Vui lòng nhập email hợp lệ"
  );
  const handleValidateRePassword = (password, rePassword) => {
    if (password.trim() == rePassword.trim()) {
      setErrRePassword(true);
      return true;
    } else {
      setErrRePassword(false);
      return false;
    }
  };
  // func
  const handleRegister = async () => {
    const email = validateEmail(valueRegister.email, setErrEmail);
    const phone = validateNumber(Number(valueRegister.phone), setErrPhone);
    const password = validateText(valueRegister.password, setErrPassword);
    const rePassword = validateText(valueRegister.rePassword, setErrRePassword);
    const userName = validateText(valueRegister.userName, setErrUserName);
    const resultRePassword = handleValidateRePassword(
      valueRegister.password,
      valueRegister.rePassword
    );
    setLoading(true);
    if (!email) {
      setMessageErrEmail("Vui lòng nhập email hợp lệ");
    }
    if (
      email &&
      phone &&
      password &&
      rePassword &&
      userName &&
      resultRePassword
    ) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          valueRegister.email,
          valueRegister.password
        )
        .then((res) => {
          console.log(res);
          if (res.additionalUserInfo?.isNewUser) {
            addDocument("users", {
              displayName: valueRegister.userName,
              email: valueRegister.email,
              photoURL: avatar,
              uid: res.user.uid,
              providerId: res.additionalUserInfo.providerId,
              phone: valueRegister.phone,
              dayOfBirth: "10/10/1980",
              gender: 0,
              address: "",
              role: 0,
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
    } else {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="register">
        {loading ? <Loading Icon={LoadingThreeDot} width={"60px"} /> : ""}

        <Container className="pt-lg-4 pb-lg-4">
          <Row className="justify-content-center">
            <Col lg="5">
              <Card className="bg-secondary shadow border-0">
                <CardBody className="px-lg-5 py-lg-3">
                  <div className="text-center text-muted mb-4">
                    <small>Đăng ký tài khoản </small>
                  </div>
                  <Form
                    role="form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleRegister();
                    }}
                  >
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-1">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <GroupIcon />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="User Name"
                          type="text"
                          onChange={(e) => {
                            setErrUserName(true);
                            setValueRegister((pre) => {
                              return {
                                ...pre,
                                userName: e.target.value,
                              };
                            });
                          }}
                        />
                      </InputGroup>

                      {!errUserName ? (
                        <p
                          style={{
                            color: "red",
                            fontSize: "14px",
                            margin: "0",
                          }}
                        >
                          *Tên không hợp lệ
                        </p>
                      ) : (
                        ""
                      )}
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative mb-1">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <EmailIcon />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="email"
                          onChange={(e) => {
                            setErrEmail(true);
                            setValueRegister((pre) => {
                              return {
                                ...pre,
                                email: e.target.value,
                              };
                            });
                          }}
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
                    {/* sdt */}
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <LocalPhoneIcon />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Phone number"
                          type="text"
                          autoComplete="off"
                          onChange={(e) => {
                            setValueRegister((pre) => {
                              return {
                                ...pre,
                                phone: e.target.value,
                              };
                            });
                            setErrPhone(true);
                          }}
                        />
                      </InputGroup>
                      {!errPhone ? (
                        <p
                          style={{
                            color: "red",
                            fontSize: "14px",
                            margin: "0",
                          }}
                        >
                          *SĐT không hợp lệ
                        </p>
                      ) : (
                        ""
                      )}
                    </FormGroup>

                    {/* pass */}
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
                          onChange={(e) => {
                            setErrPassword(true);
                            setValueRegister((pre) => {
                              return {
                                ...pre,
                                password: e.target.value,
                              };
                            });
                          }}
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
                          *Password không hợp lệ
                        </p>
                      ) : (
                        ""
                      )}
                    </FormGroup>

                    {/* re pas */}
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <LockOpenIcon />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Repassword"
                          type="password"
                          autoComplete="off"
                          onChange={(e) => {
                            setErrRePassword(true);
                            setValueRegister((pre) => {
                              return {
                                ...pre,
                                rePassword: e.target.value,
                              };
                            });
                          }}
                        />
                      </InputGroup>
                      {!errRePassword ? (
                        <p
                          style={{
                            color: "red",
                            fontSize: "14px",
                            margin: "0",
                          }}
                        >
                          *Password không khớp
                        </p>
                      ) : (
                        ""
                      )}
                    </FormGroup>

                    <div className="text-muted font-italic">
                      <small>
                        password strength:{" "}
                        <span className="text-success font-weight-700">
                          strong
                        </span>
                      </small>
                    </div>
                    <Row className="my-4">
                      <Col xs="12">
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id="customCheckRegister"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheckRegister"
                          >
                            <span>
                              I agree with the{" "}
                              <a
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Privacy Policy
                              </a>
                            </span>
                          </label>
                        </div>
                      </Col>
                    </Row>
                    <div className="text-center">
                      <Button
                        className="mt-4"
                        color="warning"
                        type="button"
                        onClick={(e) => handleRegister()}
                      >
                        Create account
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
                  <Link to="/login" className="text-light">
                    <small>Đăng nhập</small>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Register;
