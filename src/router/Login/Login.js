import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classnames from "classnames";

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
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
const Login = () => {
  return (
    <div className="login">
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
                    {/* <Button
                      className="btn-neutral btn-icon"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <span className="btn-inner--icon mr-1">
                        <GoogleIcon />
                      </span>
                      <span className="btn-inner--text">Github</span>
                    </Button> */}
                    <Button
                      className="btn-neutral btn-icon btn-login-google"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
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
                  <Form role="form">
                    <FormGroup
                    //   className={classnames("mb-3", {
                    //     focused: this.state.emailFocused,
                    //   })}
                    >
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <EmailIcon />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email"
                          type="email"
                          //   onFocus={(e) => this.setState({ emailFocused: true })}
                          //   onBlur={(e) => this.setState({ emailFocused: false })}
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup
                    //   className={classnames({
                    //     focused: this.state.passwordFocused,
                    //   })}
                    >
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
                          //   onFocus={(e) =>
                          //     this.setState({ passwordFocused: true })
                          //   }
                          //   onBlur={(e) =>
                          //     this.setState({ passwordFocused: false })
                          //   }
                        />
                      </InputGroup>
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
                    <div className="text-center">
                      <Button className="my-4" color="warning" type="button">
                        Sign in
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
