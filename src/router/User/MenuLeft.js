import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import HomeIcon from "@mui/icons-material/Home";

const MenuLeft = () => {
  return (
    <div className="menu-left">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            {" "}
            <HomeIcon />
            Trang chủ
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link to="/user">Trang chủ</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            {" "}
            <AssignmentIcon />
            Quản lý đơn hàng
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link to="/user/transport">Quản lý đơn hàng</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            {" "}
            <ShoppingCartIcon />
            Quản lý sản phẩm
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Link to="/user/manage-product">Quản lý sản phẩm</Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MenuLeft;
