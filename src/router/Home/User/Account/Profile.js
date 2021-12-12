import React from "react";
import Container from "@mui/material/Container";
import NavLeft from "./NavLeft";
import ProfileRight from "./ProfileRight";

const Profile = () => {
  return (
    <div className="profile">
      <Container>
        <div className="row">
          <div className="col-xl-3">
            <NavLeft />
          </div>

          <div className="col-xl-9">
            <ProfileRight />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
