import React from "react";
import { Link } from "react-router-dom";
import avatart from "../../assets/Image/avatar.png";
import LogoutIcon from "@mui/icons-material/Logout";
const Header3 = () => {
  return (
    <div className="header3">
      <Link to="/" className="header3-link">
        TMĐT
      </Link>

      <div className="header3-login">
        <div className="header3-login-avatar">
          <img src={avatart} alt="" />
        </div>
        <h6 className="header3-login-name">thuc 5799</h6>

        <ul>
          <li>
            <LogoutIcon /> <span>Đăng xuất</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header3;
