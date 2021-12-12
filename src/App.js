import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MenuSidebar from "router/User/MenuSidebar/MenuSilebar";
import Header from "./components/Header/Header";
import Header2 from "./components/Header2/Header2";
import AppProvider from "./Context/AppProvider";
import AuthProvider from "./Context/AuthProvider";
import UserProvider from "./Context/UserProvider";
import DetailProduct from "./router/DetailProduct/DetailProduct";
import Home from "./router/Home/Home";
import Profile from "./router/Home/User/Account/Profile";
import Login from "./router/Login/Login";
import LoginUser from "./router/LoginUser/LoginUser";
import ProductMenu from "./router/ProductMenu/ProductMenu";
import Register from "./router/Register/Register";
import RegisterShop from "./router/RegisterShop/RegisterShop";
import Shop from "./router/Shop/Shop";
import ShowAllProduct from "./router/ShowAllProduct/ShowAllProduct";
import CreateProduct from "./router/User/CreateProduct/CreateProduct";
import Users from "./router/User/Index";
import ManagerProduct from "./router/User/ManagerProduct/ManagerProduct";
import SettingShop from "./router/User/SettingShop/SettingShop";
import Transport from "./router/User/Transport/Transport";
import UpdateProduct from "./router/User/UpdateProduct/UpdateProduct";
function App() {
  return (
    <Router>
      <AuthProvider>
        <AppProvider>
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
          </Switch>
        </AppProvider>
      </AuthProvider>
      <UserProvider>
        <Switch>
          <Route exact path="/login-user">
            <LoginUser />
          </Route>
          <Route exact path="/register-user">
            <RegisterShop />
          </Route>
          <Route exact path="/user/dashboard">
            <MenuSidebar />
            <Users />
          </Route>
          <Route exact path="/user/transport">
            <MenuSidebar />
            <Transport />
          </Route>

          <Route exact path="/user/manage-product">
            <MenuSidebar />
            <ManagerProduct />
          </Route>

          <Route exact path="/user/manage-product/create-product">
            <MenuSidebar />
            <CreateProduct />
          </Route>

          <Route exact path="/user/manage-product/update-product/:id">
            <MenuSidebar />
            <UpdateProduct />
          </Route>

          <Route exact path="/user/setting-shop">
            <MenuSidebar />
            <SettingShop />
          </Route>

          {/* shop */}
          <Route exact path="/shop">
            <Header />
            <Shop />
          </Route>

          <Route exact path="/account/profile">
            <Profile />
          </Route>
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
