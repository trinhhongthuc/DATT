import { makeStyles } from "@material-ui/core/styles";
import logo from "assets/Image/reactlogo.png";
import bgImage from "assets/Image/sidebar-1.jpg";
import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.js";
import Navbar from "components/Navbars/Navbar.js";
import Sidebar from "components/Sidebar/Sidebar";
import React from "react";
import routes from "routes.js";

const useStyles = makeStyles(styles);

const MenuSidebar = () => {
  const classes = useStyles();

  const [image, setImage] = React.useState(bgImage);
  const [color, setColor] = React.useState("blue");
  const [fixedClasses, setFixedClasses] = React.useState("dropdown show");
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleImageClick = (image) => {
    setImage(image);
  };
  const handleColorClick = (color) => {
    setColor(color);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleFixedClick = () => {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  return (
    <div>
      <Sidebar
        routes={routes}
        logoText={"Creative Tim"}
        logo={logo}
        image={image}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        color={color}
      />
      <div className={classes.mainPanel}>
        <Navbar routes={routes} handleDrawerToggle={handleDrawerToggle} />

        <FixedPlugin
          handleImageClick={handleImageClick}
          handleColorClick={handleColorClick}
          bgColor={color}
          bgImage={image}
          handleFixedClick={handleFixedClick}
          fixedClasses={fixedClasses}
        />
      </div>
    </div>
  );
};

export default MenuSidebar;
