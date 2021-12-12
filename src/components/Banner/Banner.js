import Container from "@mui/material/Container";
import React from "react";
import { AppContext } from "./../../Context/AppProvider";
const Banner = () => {
  const { banner } = React.useContext(AppContext);

  return (
    <div className="banner">
      <Container>
        <div className="row" style={{ background: "#fff", padding: "10px" }}>
          {banner.map((item) => {
            return (
              <div className="banner-img" key={item.id}>
                <img src={item.image} alt="" />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Banner;
