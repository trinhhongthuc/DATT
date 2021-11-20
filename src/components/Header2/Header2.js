import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
const Header2 = ({ title }) => {
  return (
    <div className="header2">
      <Container>
        <div className="header2-wrapper">
          <Link to="/" className="header2-logo">
            TMĐT
          </Link>
          <Link to="/" className="header2-title">
            {title}
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Header2;
