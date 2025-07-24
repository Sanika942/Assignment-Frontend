import React from "react";
import logo1 from "../Login/logo1.png";
import { Card, CardBody, Col, Row } from "reactstrap";

function Header({ name }) {
  return (
    <div className="position-relative" style={{ zIndex: 1 }}>
      <Card
        className="py-3 text-white"
        style={{
          backgroundColor: "#05488bff",
          borderBottomLeftRadius: "1.5rem",
          borderBottomRightRadius: "0",
          borderTopLeftRadius: "0",
          borderTopRightRadius: "0",
        }}
      >
        <CardBody>
          <Row className="align-items-center">
            <Col xs="6">
              <h3 style={{ marginTop: "-40px" }} className="mb-0 ms-2">
                &lt; {name}
              </h3>
            </Col>
            <Col xs="6" className="text-center">
              <img
                src={logo1}
                alt="Logo"
                style={{
                  width: "130px",
                  height: "auto",
                  marginTop: "-50px",
                }}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}

export default Header;
