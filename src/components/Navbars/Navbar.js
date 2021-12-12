import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";
import classNames from "classnames";
import Button from "components/CustomButtons/Button.js";
import PropTypes from "prop-types";
import React from "react";
// core components
import AdminNavbarLinks from "./AdminNavbarLinks.js";
import RTLNavbarLinks from "./RTLNavbarLinks.js";

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  // const routeName = useRouteName();
  const { color } = props;
  const appBarClasses = classNames({
    [" " + classes[color]]: color,
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button color="transparent" href="#" className={classes.title}>
            {/* {routeName}/ */}
          </Button>
        </div>
        <Hidden smDown implementation="css">
          {props.rtlActive ? <RTLNavbarLinks /> : <AdminNavbarLinks />}
        </Hidden>
        <Hidden mdUp implementation="css">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: PropTypes.bool,
  handleDrawerToggle: PropTypes.func,
  routes: PropTypes.arrayOf(PropTypes.object),
};
