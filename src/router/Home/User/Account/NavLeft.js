import React from "react";
import avatar from "../../../../assets/Image/avatar.png";
import { Link } from "react-router-dom";
// icon
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AuthContext } from "./../../../../Context/AuthProvider";

const NavLeft = () => {
  const { user } = React.useContext(AuthContext);

  return (
    <div className="nav-left">
      <div className="nav-lef-wrapper">
        <div className="avatar">
          <img src={user.photoURL} alt="photoURL" />
        </div>
        <h6>{user.displayName}</h6>
      </div>

      <ul>
        <li>
          <Link to="#">
            <AccountCircleIcon /> Tài khoản của tôi
          </Link>
        </li>
        <li>
          <Link to="#">
            <AssignmentIcon />
            Đơn mua
          </Link>
        </li>
        <li>
          <Link to="#">
            <NotificationsIcon />
            Thông báo
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavLeft;
