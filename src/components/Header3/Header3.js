import LogoutIcon from "@mui/icons-material/Logout";
import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./../../Context/UserProvider";
import firebase from "./../../firebase/config";
const Header3 = () => {
  const { user } = React.useContext(UserContext);
  return (
    <div className="header3">
      <Link to="/" className="header3-link">
        TMĐT
      </Link>

      <div className="header3-login">
        <div className="header3-login-avatar">
          <img src={user.photoURL} alt="" />
        </div>
        <h6 className="header3-login-name">{user.displayName}</h6>

        <ul>
          <li
            onClick={() => {
              firebase.auth().signOut();
            }}
          >
            <LogoutIcon /> <span>Đăng xuất</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header3;
