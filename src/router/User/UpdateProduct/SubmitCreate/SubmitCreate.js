import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import React from "react";

const SubmitCreate = ({ handleCreateProduct }) => {
  return (
    <div className="submit-create">
      <Container>
        <div className="row">
          <div className="col-xl-12">
            <div className="submit-create-wrapper">
              <Button
                variant="contained"
                style={{
                  backgroundColor: "rgb(238, 77, 45)",
                  outLine: "none",
                }}
                className="mr-2"
                onClick={() => handleCreateProduct()}
              >
                Lưu & Hiển thị
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubmitCreate;
