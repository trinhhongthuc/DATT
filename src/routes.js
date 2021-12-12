/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import Dashboard from "@material-ui/icons/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import ManagerProduct from "./router/User/ManagerProduct/ManagerProduct";
// core components/views for Admin layout
// import DashboardPage from "views/Dashboard/Dashboard.js";
// import NotificationsPage from "views/Notifications/Notifications.js";
// import UserProfile from "views/UserProfile/UserProfile.js";
// core components/views for RTL layout
// import RTLPage from "views/RTLPage/RTLPage.js";
// import ManagerMGG from "./views/MGG/ManagerMGG";
// import ManagerBanner from "./views/ManagerBanner/ManagerBanner";
// import ManagerSlider from "views/ManagerSlider/ManagerSlider";
// import ManagerMenu from "views/ManagerMenu/ManagerMenu";
// import ManagerProduct from "./views/ManagerProduct/ManagerProduct";
// import ManagerAccount from "./views/ManagerAccount/ManagerAccount";
// import ManagerTransportMenu from "./views/ManagerTransportMenu/ManagerTransportMenu";
import Transport from "./router/User/Transport/Transport";
const dashboardRoutes = [
  {
    path: "/user/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    // component: DashboardPage,
    layout: "",
  },
  {
    path: "/user/manage-product",
    name: "Quản lý sản phẩm",
    icon: CardGiftcardIcon,
    component: ManagerProduct,
    layout: "",
  },
  {
    path: "/user/transport",
    name: "Quản lý đơn hàng",
    icon: AssignmentIcon,
    component: Transport,
    layout: "",
  },
  {
    path: "/user/setting-shop",
    name: "Cài đặt shop",
    icon: SettingsIcon,
    // component: ManagerBanner,
    layout: "",
  },
];

export default dashboardRoutes;
