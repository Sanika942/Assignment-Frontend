import React from "react";
import { Card, CardBody } from "reactstrap";
import logo1 from "./logo1.png";
function Blue() {
  return (
    <div className="position-relative" style={{ zIndex: 1 }}>
      <Card
        className="py-3  text-white "
        style={{
          backgroundColor: "#05488bff",
          height: "320px",
          borderBottomLeftRadius: "1.5rem",
          borderBottomRightRadius: "0",
          borderTopLeftRadius: "0",
          borderTopRightRadius: "0",
        }}
      >
        <CardBody className="d-flex flex-column align-items-center justify-content-center">
          <img
            src={logo1}
            alt="Logo"
            style={{
              width: "150px",
              height: "auto",
              marginTop: "-140px",
            }}
          />

          <h4 className="">Online Project Management</h4>
        </CardBody>
      </Card>
    </div>
  );
}

export default Blue;
