import logo from "./logo.svg";
import "./App.css";
import { UncontrolledAlert } from "reactstrap";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slider from "./components/Slider/Slider";
import Menu from "./components/Menu/Menu";
import Home from "./router/Home/Home";
import ShowAllProduct from "./router/ShowAllProduct/ShowAllProduct";
import ProductMenu from "./router/ProductMenu/ProductMenu";
import DetailProduct from "./router/DetailProduct/DetailProduct";
import Login from "./router/Login/Login";
import Register from "./router/Register/Register";
import Header2 from "./components/Header2/Header2";
import Header3 from "./components/Header3/Header3";
import Users from "./router/User/Index";
import MenuLeft from "./router/User/MenuLeft";
import Transport from "./router/User/Transport/Transport";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route exact path="/show-all-product">
          <Header />
          <ShowAllProduct />
        </Route>
        <Route exact path="/product-menu">
          <Header />
          <ProductMenu />
        </Route>
        <Route exact path="/product/:id">
          <Header />
          <DetailProduct />
        </Route>
        <Route exact path="/login">
          <Header2 title="Đăng nhập" />
          <Login />
        </Route>
        <Route exact path="/register">
          <Header2 title="Đăng ký" />
          <Register />
        </Route>
        <Route exact path="/user">
          <Header3 />
          <MenuLeft />
          <Users />
        </Route>
        <Route exact path="/user/transport">
          <Header3 />
          <MenuLeft />
          <Transport />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
